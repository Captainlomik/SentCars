from django.urls import include, path
from rest_framework import routers
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns, urlpatterns
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

router = routers.DefaultRouter()
router.register(r'auto', views.PersonAutoViewSet)
router.register(r'dock', views.DockSet)
router.register(r'user', views.UserViewSet)


 
# urlpatterns = [
#     path('', include(router.urls)),
#     path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
#     # path(r'api-token-auth/', obtain_jwt_token),
#     # path(r'api-token-refresh/', refresh_jwt_token),
# ]


urlpatterns = [
path('', include(router.urls) ),
path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

if settings.DEBUG:
    if settings.MEDIA_ROOT:
        urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += staticfiles_urlpatterns()