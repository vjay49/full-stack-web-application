from rest_framework import routers

from chartdata.views import ChartDataViewSet

router = routers.SimpleRouter()

router.register(r'chartdata', ChartDataViewSet, basename='chartdata')

urlpatterns = router.urls

