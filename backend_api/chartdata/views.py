from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
#from chartdata.models import ChartData
from rest_framework.response import Response
from rest_framework.decorators import api_view

#from chartdata.serializers import ChartDateSerializer

@api_view(['GET'])
def candlestick_data(request):
    data = {
        "data": [
            {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
            {"x": "2023-01-03", "open": 42, "high": 50, "low": 5, "close": 10}
        ]
    }
    return Response(data)

@api_view(['GET'])
def line_data(request):
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40],
    }
    return Response(data)

@api_view(['GET'])
def bar_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200],
    }
    return Response(data)

@api_view(['GET'])
def pie_data(request):
    data = {
        "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100],
    }
    return Response(data)



