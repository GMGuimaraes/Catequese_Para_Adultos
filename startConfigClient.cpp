#include <stdlib.h>
int main()
{
    system("npm install -g npm -hideself on");
    system("cd client && npm i -hideself on");
    system("cd client && yarn start && Pause -hideself on ");
}