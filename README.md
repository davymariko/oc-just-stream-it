# Just Stream It
Visualiser en temps réel un classement de films intéressants

# Description 
L’association JustStreamIt est connue pour ses newsletters de classement de films.
Elle souhaite se doter d’une application web permettant de visualiser en temps réel un classement de films intéressants.

Le design du futur site web devra correspondre à la maquette ci-dessous, qui est inspirée de l’interface de Netflix.

![alt text](https://github.com/davymariko/oc-just-stream-it/assets/maquette.png)

# Objectif
Le site doit fonctionner de façon similaire sur les trois navigateurs les plus utilisés actuellement: Chrome, Firefox, Safari; Microsoft Edge a fait des progrès dernièrement donc on va l'inclure.

En ce qui concerne les données nous utiliserons une API maison baptisée [OCMovies-API](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR). Cette dernière n’est pas encore en ligne, mais le développeur qui s’est occupé du développement nous a fourni une version locale pour pouvoir faciliter la réalisation du front-end de notre application. Cette version de test de OCMovies-API se trouve sur le [dépôt de code suivant](https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR). L’objectif est de récupérer les données des films depuis l’API à l’aide de requêtes ajax et de les afficher sur une interface web. Il faudra filtrer les données en fonction des critères mentionnées:


# Environnement
* L'installation de [Python 3](https://www.python.org/downloads/) est nécessaire pour la réalisation de ce projet
* Après l'installation de Python3, l'installation de [pip](https://pypi.org/project/pip/) est recommandé
* Après il est nécessaire d'installer [virtualenv](https://pypi.org/project/virtualenv/)
* L'outil de dévelopement utilisé et recommandé: [Visual Studio Code (Vscode)](https://code.visualstudio.com/)
* Le programme peut être executé sur Mac et Windows (j'espère sur Linux aussi)

# Installation
1. Cloner, en premier, le projet sur votre bureau ou environnement local
   - Clicker sur le bouton vert 'Clone' en haut à droite et copier le lien sous HTPPS ou SSH (selon la configuration de votre [git](https://git-scm.com/)
   - Cloner le project dans un dossier que vous aurez créer exclusivement pour ce projet, en entrant la commande dans le terminal:
    ```bash
    git clone [le lien copié]
    ```
    
    ![alt text](https://github.com/davymariko/python_chess/blob/main/donnees/clone.JPG)
    
    Dans notre cas, ça sera:
    ```bash
    git clone git@github.com:davymariko/oc-just-stream-it.git
    ```
   Entrer dans le dossier généré
 
2. Installer les pre-requis pour ce projet en lançant la commande:
```bash
pip install -r requirements.txt
```

# Execution
Pour déployer le site sur votre localhost, lancer le fichier flask 
```bash
python -m app.py
```
Vous devrez avoir un lien localhost généré, c'est le lien vers lite

Pour que liste fonctionne correctement, assurez vous que le lien généré de l'API est bien au port 8000, dans le cas contraire modifier la ligne


![alt text](https://github.com/davymariko/python_chess/blob/main/donnees/terminal.JPG)


# Auteur
Le site web a été conçu et est maintenu par [Davy Nimbona](https://www.linkedin.com/in/davy-nimbona/)
