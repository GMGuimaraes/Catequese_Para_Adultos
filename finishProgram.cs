using System;
using System.Collections.Generic;
using System.Text;

namespace MyProcessKiller
{
    class Program
    {
        static void Main(string[] args)
        {
            foreach (System.Diagnostics.Process myProc in System.Diagnostics.Process.GetProcesses())
            {
                if (myProc.ProcessName == "cmd")
                {
                    myProc.Kill();
                }
            }
        }
    }
}