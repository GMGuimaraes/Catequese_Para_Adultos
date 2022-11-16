#include <stdlib.h>
int main()
{
    system("npm install -g npm -hideself on");
    system("cd server && npm i -hideself on");
    system("cd server && yarn prisma generate && yarn prisma migrate dev -hideself on");
    system("cd server && yarn dev && pause -hideself on");
}