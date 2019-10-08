pipeline {
    stages {
        stage("Build") {
            steps {
                sh '''
                    git checkout master
                    git pull
                    npm install

                    cp /home/debian/.env/kinelandingpage/.env /var/lib/jenkins/workspace/kinelandingpage/

                    npm run build
                    chown -R jenkins:jenkins build
                    rm -rf /home/debian/kinelandingpage/build
                    cp -r /var/lib/jenkins/workspace/kinelandingpage/build/ /home/debian/kinelandingpage/
                '''
            }
        }
    }
}
