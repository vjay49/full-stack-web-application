Set Up and Usage Instructions:
1. cd to the backend_api directory and run the python virtual environment ".\env\Scripts\activate"
2. Within the virtual environment: pip install django djangorestframework
3. verify installation by checking version: python -m django --version
4. run the development server: python manage.py runserver
5. open browser and go to http://localhost:8000/ and you should see a django success message
6. Within a different terminal cd into the chart_webapp directory
7. Run npm run dev to start server and make sure you are using http://localhost:3000/
8. Go to http://localhost:3000/ and make sure you can see the visualization

Packages and tools used:
1. Next.js
2. Python
3. JavaScript
4. Django API/REACT Framework
5. Typescript
6. Recharts
7. Axios

Main Files/Folders:
- urls.py
- settings.py
- chartdata Folder
    - urls.py
    - views.py
- chart_webapp/app/components/charts/ Folder
    - Bar.tsx
    - BarPlot.tsx
    - Candlestick.tsx
    - CandlestickPlot.tsx
    - Line.tsx
    - LinePlot.tsx
    - Pie.tsx
    - PiePlot.tsx
- chart_webapp/app/components/ Folder
    - Navbar.tsx
    - Sidebar.tsx
- chart_webapp/app/ Folder
    - layout.tsx

Thought Process: 
- In order to build this web application, I decided to start by creating a backend application that could store hardcoded data within the JSON format provided by Blockhouse guidance.
- This information was stored in views.py and urls/endpoints were created in urls.py in order to use for integration with the frontend web app.
- Next, I build out the front-end application by first create a general template for the UI to understand how to format and fill out the space on the screen
- Eventually, I was able to use Axios to send API requests to the Django backend in order to reference the appropriate endpoints and get the correct values to fill out my charts
- I was then able to use recharts to create the charts based on the defined schema of the data
- Lastly, I decided to make the side navigation bar utility in order to have the greatest functionality and largest visualization for the charted information