---
title: Development Environment Setup
date: "2019-11-04"
---

# Installation

- [dotfiles](https://github.com/sarangjo/dotfiles)
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- [Ubuntu 18.04](https://www.microsoft.com/en-us/p/ubuntu-1804-lts/9n9tngvndl3q) (the latest Ubuntu distro at the time of writing)
- [wsltty](https://github.com/mintty/wsltty)
- [Atom](https://atom.io)
- [Git for Windows](https://git-scm.com)
- [Cascadia Code](https://github.com/microsoft/cascadia-code)

# Setup

1. Set up WSL
   1. Packages to install: `sudo apt install -y git`
   2. Turn off password for `sudo` access:
      1. `sudo visudo`
      2. Add line at the bottom: `sarang ALL=(ALL) NOPASSWD: ALL`
   3. Move home directory:
      1. Edit `/etc/passwd` and change `/home/sarangj` in my line (most likely at the bottom) to `/mnt/c/Users/<USERNAME>`
   4. Turn off command not found: `sudo apt remove command-not-found command-not-found-data`
2. Clone and install dotfiles:

```
$ mkdir -p ~/git && cd ~/git
$ git clone git@github.com:sarangjo/dotfiles.git
$ cd ~/git/dotfiles
$ ./install.sh
```

3. Restore backup for Atom with `sync-settings`
   1. Create a new `Personal Access Token` with `gist` access: https://github.com/settings/tokens/new
4. Set `wsltty` settings
   1. Font: `Cascadia Code`
   2. Size: `14pt`
   3. Cursor: `Block`, not blinking
5. Install Vundle and `vim` packages
