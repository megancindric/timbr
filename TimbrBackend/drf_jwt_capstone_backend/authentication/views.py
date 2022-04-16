from django.contrib.auth import get_user_model
from rest_framework.decorators import permission_classes
from rest_framework.views import APIView
from .serializers import RegistrationSerializer, UserSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.http.response import Http404



User = get_user_model()


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer

class UserList(APIView):
    permission_classes = [IsAuthenticated]
    
    #permission_classes([IsAuthenticated])
    def get(self, request):
        
        all_users = User.objects.all()
        serializer = UserSerializer(all_users, many=True)
        return Response(serializer.data)

class UserDetail(APIView):

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    #get user by id
    def get(self, request, pk):
        current_user = self.get_object(pk)
        serializer = UserSerializer(current_user)
        return Response(serializer.data)

def post_bets(self, pk, body):
    try:
        game = Game.objects.get(pk,pk)
    except:
        serializer = GameSerializer(body.game)
        if serializer.is_valid():
            serializer.save(user=request.user)
    newBet = BetSerializer(body.bet)
    return Response(body)