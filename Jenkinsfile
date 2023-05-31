pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git branch: 'dev',
        url: 'https://github.com/ALowtonQA/EPA_Example_Project'
      }
    }
        
    stage('Install backend dependencies') {
      steps {
        dir('backend') { 
          bat 'npm install'
        }
      }
    }
     
    stage('Backend test') {
      steps {
        dir('backend') { 
          bat 'npm test'
        }
      }
    }
    
    stage('Install frontend dependencies') {
      steps {
        dir('frontend') { 
          bat 'npm install'
        }
      }
    }
     
    stage('Frontend test') {
      steps {
        dir('frontend') { 
          bat 'npm test'
        }
      }
    }    
  }
}