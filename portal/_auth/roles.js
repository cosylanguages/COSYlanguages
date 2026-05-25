// Role definitions and permissions for COSYlanguages portal.
// GitHub Pages has no server auth — role is determined by access code in localStorage.

const COSY_ROLES = {
  FREE: 'free',
  STUDENT: 'student',
  TEACHER: 'teacher',
  ADMIN: 'admin'
};

const COSY_PERMISSIONS = {
  free:    { practice: false, games: true,  portal: false, curriculum: false },
  student: { practice: true,  games: true,  portal: true,  curriculum: true  },
  teacher: { practice: true,  games: true,  portal: true,  curriculum: true  },
  admin:   { practice: true,  games: true,  portal: true,  curriculum: true  }
};

function cosyGetRole() {
  try { return localStorage.getItem('cosy_role') || COSY_ROLES.FREE; } catch(e) { return COSY_ROLES.FREE; }
}

function cosySetRole(role) {
  try { localStorage.setItem('cosy_role', role); } catch(e) {}
}

function cosyCanAccess(feature) {
  const role = cosyGetRole();
  return COSY_PERMISSIONS[role]?.[feature] || false;
}
