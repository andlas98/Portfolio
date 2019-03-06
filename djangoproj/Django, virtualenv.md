Note: Programming on Windows 10 with an Ubuntu console.
# TO CREATE A VIRTUAL ENVIRONMENT IN A DJANGO PROJECT:

0. Make sure you have virtualenv installed.
1. Also make sure you made a Django project directory with **django-admin startproject project_name**
2. Move into the Django directory **cd project_name**
3. Enter **virtualenv -p versionofpythonyouwanttouse(python,python3) .**
4. Activate virtual environment **source bin/activate**
5. Install Django within the directory **pip install django**
6. Run the server with **versionofpythonyouwanttouse(python,python3) manage.py runserver**
7. Within a browser, enter **http://127.0.0.1:8000/** to see what's been made so far!