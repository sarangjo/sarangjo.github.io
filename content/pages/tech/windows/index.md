---
title: Windows
date: "2018-11-16"
---

Windows shell development is a mess. Here are some of my notes to explain how it all works together as part of my crusade to not use a Mac at work.

# Shells

## Native

- `cmd` – the most primitive command line application on Windows, pretty much obsolete
- `powershell` – native MSFT improvement on CMD, still clunky and not POSIX compliant by a long shot. but is now cross-platform, so they're trying for compatibility

## Unix-like

Assists with building of native Windows applications using MinGW-w64

- [MSYS](http://www.mingw.org/wiki/MSYS) – part of MinGW, ported from Cygwin 1.3
- [MSYS2](http://msys2.org) – independent improvement on MSYS
  - includes `pacman` package manager
  - based on Cygwin, builds on the Cygwin DLL
  - also based on minGW-w64

# Compiler toolchains for Windows

Programs that provide native POSIX-y (need to confirm this) compilation tools, most importantly **GCC**.

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
