from django.urls import include, path
from rest_framework import routers
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

router = routers.DefaultRouter()
router.register(r'auto', views.PersonAutoViewSet),
router.register(r'dock', views.DockSet)
router.register(r'user', views.UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
   path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

urlpatterns += staticfiles_urlpatterns()