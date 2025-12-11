#! /bin/bash
# Debug Infos
set -x

tar -czvf /home/alex/Dokumente/backup/html/web_backup.tar.gz /home/alex/Dokumente/git_html/git_cmd/12-final-version
# Verzeichnis auswählen
cd /home/alex/Dokumente/git_html/git_cmd

req= find .git/ -maxdepth 1 -type d -print| wc -l

# Überprüfen ob das .git Verzeichnis besteht
if [ "$req -gt 0" ]
	then 
		git pull https://github.com/AlexSchwarz77/git_cmd_2025_12.git
	else 
 		git clone https://github.com/AlexSchwarz77/git_cmd_2025_12.git
fi

# npm build 4 prod
npm install --production


# alte Website archivieren

# Target/Destination in den /var/www/

# gegebenenfalls Rollback


# TODO: Git Credentials credential.helper -> DONE!
