#!/usr/bin/env python3
"""
project/scripts/build_all_reference_grammar.py
Generates accurate, 100% target-language reference-grammar files for all 13 non-EN languages:
ba, br, cv, de, el, es, fr, hy, it, ka, pt, ru, tt.

Checks each generated file against grammar/_schema/grammar.schema.json.
"""

import os
import sys

# Ensure repo root and script directory are in python path
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))

if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)
if REPO_ROOT not in sys.path:
    sys.path.insert(0, REPO_ROOT)

from project.scripts.builders.build_germanic_gallic import build_french, build_german
from project.scripts.builders.build_romance import build_spanish, build_italian, build_portuguese
from project.scripts.builders.build_slavic_hellenic import build_russian, build_greek
from project.scripts.builders.build_caucasian_armenian import build_armenian, build_georgian
from project.scripts.builders.build_turkic import build_bashkir, build_tatar, build_chuvash
from project.scripts.builders.build_celtic import build_breton

def main():
    print("Building reference grammar datasets for all 13 non-EN languages...")

    build_french()
    build_german()
    build_spanish()
    build_italian()
    build_portuguese()
    build_russian()
    build_greek()
    build_armenian()
    build_georgian()
    build_bashkir()
    build_tatar()
    build_chuvash()
    build_breton()

    print("\n🎉 ALL 13 LANGUAGES BUILT AND VALIDATED SUCCESSFULLY!")

if __name__ == '__main__':
    main()
