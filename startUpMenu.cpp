#include <windows.h>

const char g_szClassName[] = "ClassedaJanela";
HWND buttonStart, buttonFinish;
LRESULT CALLBACK WndProc(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
    switch(msg)
    {
		case WM_CREATE:
		buttonStart = CreateWindow("BUTTON", "Start Client Service", WS_VISIBLE | WS_CHILD | WS_BORDER,
			20, 50, 200, 20, hwnd, (HMENU) 1, NULL, NULL);
		buttonFinish = CreateWindow("BUTTON", "Start Server Service", WS_VISIBLE | WS_CHILD | WS_BORDER,
			20, 100, 200, 20, hwnd, (HMENU) 2, NULL, NULL);
		buttonFinish = CreateWindow("BUTTON", "Finish Service", WS_VISIBLE | WS_CHILD | WS_BORDER,
			20, 150, 200, 20, hwnd, (HMENU) 3, NULL, NULL);
		break;
		case WM_COMMAND:
			switch (LOWORD(wParam))
			{
				case 1:
					system("start .//startConfigClient.exe -hideself on");
					::MessageBeep(MB_ICONEXCLAMATION);
					::MessageBox(hwnd,"Client Service is Starting","Client Service is Starting",MB_OK);
				break;				
				case 2:
					system("start .//startConfigServer.exe -hideself on");
					::MessageBeep(MB_ICONEXCLAMATION);
					::MessageBox(hwnd,"Server Service is Starting","Server Service is Starting",MB_OK);
				break;
				case 3:
					::MessageBeep(MB_ICONEXCLAMATION);
					::MessageBox(hwnd,"Service is Finished","Service is Finished",MB_OK);
					system("start .//finishProgram.exe -hideself on");
					exit(0);
				break;
			}
		break;
        case WM_CLOSE:
            DestroyWindow(hwnd);
        break;
        case WM_DESTROY:
            PostQuitMessage(0);
        break;
        default:
            return DefWindowProc(hwnd, msg, wParam, lParam);
    }
    return 0;
}

int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance,
    LPSTR lpCmdLine, int nCmdShow)
{
    WNDCLASSEX wc;
    HWND hwnd;
    MSG Msg;

    wc.cbSize        = sizeof(WNDCLASSEX);
    wc.style         = 0;
    wc.lpfnWndProc   = WndProc;
    wc.cbClsExtra    = 0;
    wc.cbWndExtra    = 0;
    wc.hInstance     = hInstance;
    wc.hIcon         = LoadIcon(NULL, IDI_APPLICATION);
    wc.hCursor       = LoadCursor(NULL, IDC_ARROW);
    wc.hbrBackground = (HBRUSH)(COLOR_3DDKSHADOW);
    wc.lpszMenuName  = NULL;
    wc.lpszClassName = g_szClassName;
    wc.hIconSm       = LoadIcon(NULL, IDI_APPLICATION);

    if(!RegisterClassEx(&wc))
    {
        MessageBox(NULL, "Window Registration Failed!", "Error!",
            MB_ICONEXCLAMATION | MB_OK);
        return 0;
    }

    hwnd = CreateWindowEx(
        WS_EX_CLIENTEDGE,
        g_szClassName,
        "Simple Window",
        WS_OVERLAPPEDWINDOW,
        CW_USEDEFAULT, CW_USEDEFAULT, 280, 220,
        NULL, NULL, hInstance, NULL);

    if(hwnd == NULL)
    {
        MessageBox(NULL, "Window Creation Failed!", "Error!",
            MB_ICONEXCLAMATION | MB_OK);
        return 0;
    }

    ShowWindow(hwnd, nCmdShow);
    UpdateWindow(hwnd);

    // Mensagem Loop
    while(GetMessage(&Msg, NULL, 0, 0) > 0)
    {
        TranslateMessage(&Msg);
        DispatchMessage(&Msg);
    }
    return Msg.wParam;
}	

//----------------------------
