#include <stdlib.h>
int main()
{
    system("npm install -g npm");
    system("cd server && npm i");
    system("cd server && yarn prisma generate && yarn prisma migrate dev");
    system("cd server && yarn dev && pause");
}