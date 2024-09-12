from django.urls import path

from . import views

urlpatterns = [
    path('api/candlestick-data/', views.candlestick_data, name='candlestick_data'),
    path('api/line-chart-data/', views.line_data, name='line_data'),
    path('api/bar-chart-data/', views.bar_data, name='bar_data'),
    path('api/pie-chart-data/', views.pie_data, name='pie_data'),
]