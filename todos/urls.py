from django.urls import path


from .views import TodoListCreateView, TodoRetrieveUpdateDestroyView




urlpatterns = [
    path('<int:pk>/', TodoRetrieveUpdateDestroyView.as_view()),
    path('', TodoListCreateView.as_view()),
]
