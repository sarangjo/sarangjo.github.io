---
title: Developing Software on Windows
date: "2022-09-21"
---

> This page was originally drafted on 2018-11-16 and updated with better context and perspective. 2018... simpler days.

Developing software on Windows can be confusing. There are memes galore about the experience of developing on Windows. Here are some of my notes to explain how it all works together, as part of my crusade to not use a Mac as a software developer at Illumio.

# Shells

**Definition**:
- A shell is a program that allows the user to execute commands provided by the operating system.
- A shell may or may not be "graphical" - i.e. include a GUI that allows the shell to be run in a window.

## Native

- [`cmd.exe`](https://en.wikipedia.org/wiki/Cmd.exe) (graphical) – the most primitive command line application on Windows. It's got lots of years of usage in the world (it's 35 years old at the time of writing), but I would like for this to be obsolete, please. No hate, it's just time to let bygones be bygones.
- [`powershell.exe`](https://en.wikipedia.org/wiki/PowerShell) (graphical) – the native MSFT improvement on CMD. PowerShell commands are a bit more verbose than corresponding `bash` commands, and PowerShell is not POSIX compliant by a long shot. It is now cross-platform, however, so they're trying for compatibility and adoption outside of Windows.

## Unix-like

- `bash.exe` (non-graphical) - the \*nix developer's favorite (or so I think?) shell. Not natively installed on a Windows machine, needs to be installed from a third-party source, like:
  - Git for Windows (includes "Git Bash", which is pulled from MSYS2)
  - Windows Subsystem for Linux (see below)
  - Cygwin (see below)
  - MSYS2 (see below)

As noted above, `bash.exe` is non-graphical, which means in order to use it, the user needs a graphical program that provides a window in which to provide it with commands to run. Each of the sources above are using a separate process to manage the window in which the user interacts with `bash`.

# Command line environment

**Definition**: A native Windows graphical program using which a

Assists with building of native Windows applications using MinGW-w64

- [MSYS](http://www.mingw.org/wiki/MSYS) – part of MinGW, ported from Cygwin 1.3
- [MSYS2](http://msys2.org) – independent improvement on MSYS
  - includes `pacman` package manager
  - based on Cygwin, builds on the Cygwin DLL
  - also based on minGW-w64

# Compiler toolchains for Windows

**Definition**: Programs that provide the program or set of programs required to compile C/C++ code.

Each compiler toolchain has its own command-line tool with specific flags and options to let users compile their C/C++ code.

## MSVC: Microsoft Visual C++

- [cl.exe](https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B) - the compiler for Microsoft Visual C++ (MSVC). This has its own API that is specific to MSVC. Example invocation to compile a program:

## GCC: GNU Compiler Collection

- [MinGW](http://mingw.org) - stands for "minimalistic GNU for Windows", first effort, development dropped off
- [MinGW-w64](http://mingw-w64.org) – improvements on MinGW for 64bit systems and Objective-C, de facto for GCC on Windows

# Terminal emulators

- [mintty](https://mintty.github.io/) - the main terminal emulator for Cygwin, MSYS, MSYS2
- [ConEmu](https://conemu.github.io/) - an alternative **con**sole **emu**lator
- [wsltty](https://github.com/mintty/wsltty) - Mintty designed to be used as a frontend terminal for WSL

# Linux distributions

- [Cygwin](https://cygwin.com)
  - distribution of open source + GNU tools, rewritten for Windows.
  - Provides a library that has POSIX system calls expected by programs written for Linux, but can't run native Linux binaries, i.e. a POSIX compatibility layer: `cygwin1.dll`
  - Source code written for Linux can now be compiled for Windows without major code changes, with the Cygwin library
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/about) - allows running native Linux binaries directly
  - Provides a kernel-level translation subsystem (`lxss`) to convert Linux system calls into native Windows system calls, and also translates the response back up to the linux process
