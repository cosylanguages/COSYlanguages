/**
 * COSYlanguages Comparative Atlas 3D Engine
 * Interactive 3D Language Tree with Three.js
 */

(function () {
  'use strict';

  class LanguageTree3D {
    constructor(containerId, options = {}) {
      this.container = document.getElementById(containerId);
      if (!this.container) return;

      this.options = options;
      this.currentHypothesis = 'nostratic';
      this.treeData = null;
      this.nodesMap = new Map();
      this.activeNodes = [];
      this.selectedNodeId = null;
      this.hoveredNodeId = null;

      this.currentHeatmapMode = 'default';
      this.currentEpochFilter = 2000;
      this.highlightedNodeIds = null;

      // Three.js objects
      this.scene = null;
      this.camera = null;
      this.renderer = null;
      this.controls = null;
      this.raycaster = new THREE.Raycaster();
      this.mouse = new THREE.Vector2();

      // Mesh groups
      this.nodesGroup = new THREE.Group();
      this.branchesGroup = new THREE.Group();
      this.labelsGroup = new THREE.Group();
      this.highlightGroup = new THREE.Group();
      this.particleGroup = new THREE.Group();

      // Interactive meshes map (mesh.uuid -> nodeId)
      this.interactiveMeshes = new Map();

      // Camera lerp animation target
      this.targetCameraPos = null;
      this.targetLookAt = null;
      this.currentLookAt = new THREE.Vector3(0, 80, 0);

      this.init();
    }

    async init() {
      this.setupScene();
      this.setupLighting();
      this.setupBackgroundParticles();
      this.setupEventListeners();

      await this.loadData();
      if (this.treeData) {
        this.renderTreeForHypothesis(this.currentHypothesis);
      }

      this.animate();
    }

    setupScene() {
      const width = this.container.clientWidth || window.innerWidth;
      const height = this.container.clientHeight || 600;

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x0f1419); // Deep dark slate background
      this.scene.fog = new THREE.FogExp2(0x0f1419, 0.0015);

      this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
      this.camera.position.set(0, 180, 480);

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.setSize(width, height);
      this.renderer.shadowMap.enabled = true;
      this.container.appendChild(this.renderer.domElement);

      if (window.THREE.OrbitControls) {
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.maxPolarAngle = Math.PI / 2 + 0.1;
        this.controls.minDistance = 30;
        this.controls.maxDistance = 800;
        this.controls.target.copy(this.currentLookAt);
      }

      this.scene.add(this.nodesGroup);
      this.scene.add(this.branchesGroup);
      this.scene.add(this.labelsGroup);
      this.scene.add(this.highlightGroup);
      this.scene.add(this.particleGroup);
    }

    setupLighting() {
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      this.scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0xfff5e6, 0.9);
      dirLight1.position.set(200, 400, 200);
      this.scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0x739ec7, 0.5);
      dirLight2.position.set(-200, 100, -200);
      this.scene.add(dirLight2);

      const pointLight = new THREE.PointLight(0x4a90e2, 1.2, 500);
      pointLight.position.set(0, 150, 0);
      this.scene.add(pointLight);
    }

    setupBackgroundParticles() {
      const particleCount = 200;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 800;
        positions[i + 1] = Math.random() * 400 - 50;
        positions[i + 2] = (Math.random() - 0.5) * 800;

        colors[i] = 0.4 + Math.random() * 0.4;
        colors[i + 1] = 0.6 + Math.random() * 0.4;
        colors[i + 2] = 0.8 + Math.random() * 0.2;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 2.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.5
      });

      const particles = new THREE.Points(geometry, material);
      this.particleGroup.add(particles);
    }

    async loadData() {
      try {
        const res = await fetch('./data/language-tree.json');
        this.treeData = await res.json();
        this.treeData.nodes.forEach(node => {
          this.nodesMap.set(node.id, node);
        });
      } catch (e) {
        console.error('Failed to load language tree data:', e);
      }
    }

    setHypothesis(hypothesisId) {
      if (this.currentHypothesis === hypothesisId) return;
      this.currentHypothesis = hypothesisId;
      this.renderTreeForHypothesis(hypothesisId);

      if (this.options.onHypothesisChange) {
        this.options.onHypothesisChange(hypothesisId);
      }
    }

    setHeatmapMode(mode) {
      this.currentHeatmapMode = mode;
      this.renderTreeForHypothesis(this.currentHypothesis);
    }

    setEpochFilter(epochYear) {
      this.currentEpochFilter = epochYear;
      this.renderTreeForHypothesis(this.currentHypothesis);
    }

    highlightMatchingNodes(matchingIds) {
      this.highlightedNodeIds = matchingIds ? new Set(matchingIds) : null;
      this.renderTreeForHypothesis(this.currentHypothesis);
    }

    clearSceneGroups() {
      const clearGroup = (group) => {
        while (group.children.length > 0) {
          const obj = group.children[0];
          group.remove(obj);
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach(m => m.dispose());
            } else {
              obj.material.dispose();
            }
          }
        }
      };

      clearGroup(this.nodesGroup);
      clearGroup(this.branchesGroup);
      clearGroup(this.labelsGroup);
      clearGroup(this.highlightGroup);
      this.interactiveMeshes.clear();
    }

    getNodeColorForHeatmap(node) {
      if (this.highlightedNodeIds && !this.highlightedNodeIds.has(node.id)) {
        return 0x37474f; // Dim un-matched nodes
      }

      if (this.currentHeatmapMode === 'word_order') {
        const wo = node.typology?.word_order || '';
        if (wo.includes('SOV')) return 0xef5350; // Red for SOV
        if (wo.includes('SVO')) return 0x42a5f5; // Blue for SVO
        if (wo.includes('VSO') || wo.includes('V2')) return 0x66bb6a; // Green for VSO/V2
        return 0xb0bec5;
      }

      if (this.currentHeatmapMode === 'morphology') {
        const morph = node.typology?.morphology || '';
        if (morph.includes('Agglutinative')) return 0xab47bc; // Purple for Agglutinative
        if (morph.includes('Fusional')) return 0xffa726; // Orange for Fusional
        if (morph.includes('Isolating')) return 0x26a69a; // Teal for Isolating
        return 0xb0bec5;
      }

      // Default Phylogeny Mode
      if (node.type === 'super_root' || node.type === 'root') return 0xffa726;
      if (node.type === 'macro_family') return 0xab47bc;
      if (node.type === 'family') return 0x42a5f5;
      if (node.type === 'subfamily') return 0x26a69a;
      return node.cosy_status === 'core' ? 0x66bb6a : 0xff7043;
    }

    getNodeEraYear(node) {
      if (node.type === 'super_root') return -20000;
      if (node.type === 'root') return -15000;
      if (node.type === 'macro_family') return -9000;
      if (node.type === 'family') return -4500;
      if (node.type === 'subfamily') return -1500;
      return 500; // Languages
    }

    renderTreeForHypothesis(hypothesisId) {
      this.clearSceneGroups();

      // Filter nodes relevant to this hypothesis and epoch
      this.activeNodes = this.treeData.nodes.filter(node => {
        const inHypo = node.hypotheses.includes(hypothesisId);
        const era = this.getNodeEraYear(node);
        return inHypo && era <= this.currentEpochFilter;
      });

      const activeNodeIds = new Set(this.activeNodes.map(n => n.id));

      // Build 3D nodes & branches
      this.activeNodes.forEach(node => {
        const parentId = node.parents[hypothesisId];
        const [x, y, z] = node.pos;

        // Create Node Mesh
        let geometry;
        const color = this.getNodeColorForHeatmap(node);

        if (node.type === 'super_root' || node.type === 'root') {
          geometry = new THREE.IcosahedronGeometry(14, 2);
        } else if (node.type === 'macro_family' || node.type === 'family') {
          geometry = new THREE.DodecahedronGeometry(node.type === 'macro_family' ? 11 : 9.5, 1);
        } else if (node.type === 'subfamily') {
          geometry = new THREE.SphereGeometry(7, 16, 16);
        } else {
          geometry = new THREE.SphereGeometry(node.cosy_status === 'core' ? 5.5 : 4.5, 16, 16);
        }

        const material = new THREE.MeshStandardMaterial({
          color: color,
          emissive: color,
          emissiveIntensity: (this.highlightedNodeIds && this.highlightedNodeIds.has(node.id)) ? 0.8 : 0.25,
          roughness: 0.3,
          metalness: 0.2
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        mesh.userData = { nodeId: node.id, type: node.type };

        this.nodesGroup.add(mesh);
        this.interactiveMeshes.set(mesh.uuid, node.id);

        // Branch line to parent
        if (parentId && activeNodeIds.has(parentId)) {
          const parentNode = this.nodesMap.get(parentId);
          const [px, py, pz] = parentNode.pos;

          this.createCurvedBranch(
            new THREE.Vector3(px, py, pz),
            new THREE.Vector3(x, y, z),
            node.type
          );
        }
      });

      // Position camera appropriately
      this.resetCameraView();
    }

    createCurvedBranch(startVec, endVec, targetNodeType) {
      const midVec = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5);
      midVec.y += 12;

      const curve = new THREE.QuadraticBezierCurve3(startVec, midVec, endVec);
      const tubeRadius = (targetNodeType === 'family' || targetNodeType === 'macro_family') ? 1.8 : 0.9;
      const geometry = new THREE.TubeGeometry(curve, 20, tubeRadius, 8, false);

      let branchColor = 0x546e7a;
      if (targetNodeType === 'macro_family') branchColor = 0x8e24aa;
      else if (targetNodeType === 'family') branchColor = 0x78909c;

      const material = new THREE.MeshStandardMaterial({
        color: branchColor,
        roughness: 0.6,
        metalness: 0.1,
        transparent: true,
        opacity: 0.85
      });

      const branchMesh = new THREE.Mesh(geometry, material);
      this.branchesGroup.add(branchMesh);
    }

    getAncestralBreadcrumbs(nodeId) {
      if (!nodeId) return [];
      const path = [];
      let currentId = nodeId;

      while (currentId) {
        const node = this.nodesMap.get(currentId);
        if (!node) break;
        path.unshift(node);
        currentId = node.parents[this.currentHypothesis];
      }

      return path;
    }

    highlightLineage(nodeId) {
      while (this.highlightGroup.children.length > 0) {
        const child = this.highlightGroup.children[0];
        this.highlightGroup.remove(child);
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      }

      if (!nodeId) return;

      let currentId = nodeId;
      const pathIds = [currentId];

      while (currentId) {
        const currNode = this.nodesMap.get(currentId);
        if (!currNode) break;
        const parentId = currNode.parents[this.currentHypothesis];
        if (parentId && this.nodesMap.has(parentId)) {
          pathIds.push(parentId);
          currentId = parentId;
        } else {
          break;
        }
      }

      for (let i = 0; i < pathIds.length - 1; i++) {
        const n1 = this.nodesMap.get(pathIds[i]);
        const n2 = this.nodesMap.get(pathIds[i + 1]);

        const start = new THREE.Vector3(...n1.pos);
        const end = new THREE.Vector3(...n2.pos);
        const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
        mid.y += 12;

        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const tubeGeom = new THREE.TubeGeometry(curve, 24, 2.5, 8, false);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: 0xffd54f,
          wireframe: false,
          transparent: true,
          opacity: 0.85
        });

        const glowMesh = new THREE.Mesh(tubeGeom, glowMaterial);
        this.highlightGroup.add(glowMesh);
      }
    }

    focusNode(nodeId) {
      const node = this.nodesMap.get(nodeId);
      if (!node) return;

      this.selectedNodeId = nodeId;
      this.highlightLineage(nodeId);

      const [x, y, z] = node.pos;
      this.targetLookAt = new THREE.Vector3(x, y, z);
      this.targetCameraPos = new THREE.Vector3(x, y + 40, z + 120);

      if (this.options.onNodeSelect) {
        const breadcrumbs = this.getAncestralBreadcrumbs(nodeId);
        this.options.onNodeSelect(node, breadcrumbs);
      }
    }

    resetCameraView() {
      this.targetLookAt = new THREE.Vector3(0, 80, 0);
      this.targetCameraPos = new THREE.Vector3(0, 180, 480);
      this.highlightLineage(null);
    }

    setupEventListeners() {
      const dom = this.renderer ? this.renderer.domElement : this.container;

      dom.addEventListener('mousemove', (e) => this.onPointerMove(e));
      dom.addEventListener('click', (e) => this.onPointerClick(e));

      window.addEventListener('resize', () => this.onWindowResize());
    }

    onPointerMove(event) {
      const rect = this.renderer.domElement.getBoundingClientRect();
      this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.nodesGroup.children);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object;
        const nodeId = hitMesh.userData.nodeId;
        this.container.style.cursor = 'pointer';

        if (this.hoveredNodeId !== nodeId) {
          this.hoveredNodeId = nodeId;
          const node = this.nodesMap.get(nodeId);
          if (this.options.onNodeHover) {
            this.options.onNodeHover(node, event);
          }
        }
      } else {
        this.container.style.cursor = 'default';
        if (this.hoveredNodeId) {
          this.hoveredNodeId = null;
          if (this.options.onNodeHover) {
            this.options.onNodeHover(null, event);
          }
        }
      }
    }

    onPointerClick(event) {
      const rect = this.renderer.domElement.getBoundingClientRect();
      this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.nodesGroup.children);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object;
        const nodeId = hitMesh.userData.nodeId;
        this.focusNode(nodeId);
      }
    }

    onWindowResize() {
      if (!this.container || !this.renderer || !this.camera) return;
      const width = this.container.clientWidth;
      const height = this.container.clientHeight || 600;

      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    }

    animate() {
      requestAnimationFrame(() => this.animate());

      if (this.particleGroup) {
        this.particleGroup.rotation.y += 0.0003;
      }

      if (this.targetCameraPos && this.targetLookAt) {
        this.camera.position.lerp(this.targetCameraPos, 0.05);
        this.currentLookAt.lerp(this.targetLookAt, 0.05);

        if (this.controls) {
          this.controls.target.copy(this.currentLookAt);
        }

        if (this.camera.position.distanceTo(this.targetCameraPos) < 1.0) {
          this.targetCameraPos = null;
          this.targetLookAt = null;
        }
      }

      if (this.controls) {
        this.controls.update();
      }

      this.renderer.render(this.scene, this.camera);
    }
  }

  // Export to window
  window.LanguageTree3D = LanguageTree3D;
})();
