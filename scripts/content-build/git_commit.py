import subprocess

def run_cmd(args):
    print(f"Running: {' '.join(args)}")
    result = subprocess.run(args, capture_output=True, text=True)
    print("STDOUT:", result.stdout)
    print("STDERR:", result.stderr)

def main():
    run_cmd(["git", "add", "."])
    run_cmd(["git", "commit", "-m", "Standardize all public session page layouts across 7 pedagogical families"])

if __name__ == '__main__':
    main()
