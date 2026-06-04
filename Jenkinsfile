pipeline {
  agent any

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Dependency Scan') {
      steps {
        sh 'npm audit --audit-level=moderate || true'
      }
      post {
        always {
          sh 'npm audit --json > npm-audit-report.json || true'
          archiveArtifacts artifacts: 'npm-audit-report.json', allowEmptyArchive: true
        }
      }
    }

    stage('SAST - Semgrep') {
      steps {
        sh 'semgrep scan --config auto --json --output semgrep-report.json || true'
      }
      post {
        always {
          archiveArtifacts artifacts: 'semgrep-report.json', allowEmptyArchive: true
        }
      }
    }

    stage('Secrets - Gitleaks') {
      steps {
        sh 'gitleaks detect --source . --report-format json --report-path gitleaks-report.json || true'
      }
      post {
        always {
          archiveArtifacts artifacts: 'gitleaks-report.json', allowEmptyArchive: true
        }
      }
    }

    stage('Filesystem Scan - Trivy') {
      steps {
        sh 'trivy fs --format json --output trivy-fs-report.json . || true'
      }
      post {
        always {
          archiveArtifacts artifacts: 'trivy-fs-report.json', allowEmptyArchive: true
        }
      }
    }
  }
}
