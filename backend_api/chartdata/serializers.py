from rest_framework import serializers

from chartdata.models import ChartData

class ChartDateSerializer(serializers.ModelSerializer):
    
    class Line:
        model = ChartData
        fields = ['label', 'data', 'id']
        read_only_fields = ['id']