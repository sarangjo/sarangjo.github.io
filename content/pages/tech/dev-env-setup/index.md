---
title: Development Environment Setup
date: "2019-11-04"
---

So I recently built a PC, and had to get my full development environment set up again. It was quite a hassle, primarily because I hadn't properly written down what I had done to set it up on my laptop for all these years. This document should ensure that that doesn't happen again.

# Windows Installation

- [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- [Ubuntu 18.04](https://www.microsoft.com/en-us/p/ubuntu-1804-lts/9n9tngvndl3q) (the latest Ubuntu distro at the time of writing)
- [wsltty](https://github.com/mintty/wsltty)
- [VS Code](https://code.visualstudio.com/)
- [Cascadia Code](https://github.com/microsoft/cascadia-code)
- [Git for Windows](https://git-scm.com)

# WSLtty

- Set `wsltty` settings
  - Text
    - Font: `Cascadia Code`
    - Size: `14pt`
  - Looks
    - Cursor: `Block`, not blinking
  - Terminal
    - Bell: `no beep`

# WSL

- Turn off password for `sudo` access:
  - `$ sudo visudo`
  - Add line at the bottom: `sarang ALL=(ALL) NOPASSWD: ALL` (beware the fearful editor, Nano!)
- Move home directory:
  - Edit `/etc/passwd` and change `/home/sarang` in the current user's line (most likely at the bottom) to `/mnt/c/Users/<WINDOWS USERNAME>`
- Turn off `command-not-found`
  - `$ sudo apt remove command-not-found command-not-found-data`
- Set up `/etc/wsl.conf` file:
  ```
  [automount]
  options = "metadata,umask=0033"
  ```
- Clone and install dotfiles:
  ```
  $ mkdir -p ~/git && cd ~/git
  $ git clone git@github.com:sarangjo/dotfiles.git
  $ cd ~/git/dotfiles
  $ ./install.sh
  ```

# Vim

- Install [GVim for Windows](https://www.vim.org/download.php)
- Install Vundle and `vim` packages
  ```
  $ git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
  $ vim
  :VundleInstall
  ```

# NodeJS and Yarn

1. [NodeJS](https://nodejs.org)

Do the WSL installation first, so that `n` doesn't get confused by node in PATH.

- Windows: https://nodejs.org/en/
- WSL (using [n](https://github.com/tj/n))
  ```
  $ sudo apt install -y make
  $ curl -L https://git.io/n-install | bash
  ```

2. [Yarn](https://yarnpkg.com)

- Windows: https://yarnpkg.com/en/docs/install#windows-stable
- WSL:

  ```
  $ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
  $ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
  $ # exclude the nodejs install
  $ sudo apt update && sudo apt install -y --no-install-recommends yarn
  ```

# Python 2.7 and 3.7

```
$ sudo apt install -y python2.7 python3.7 python3.7-venv
```

# MongoDB

- WSL installation: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

# Misc

```
$ sudo apt install -y exuberant-ctags
```

# WIP

- MSYS2
  - Modify the Mingw x64 start menu shortcut to have `-full-path`
  - Set `%HOME%` to home directory
- PHP
- ConEmu/Cmder?
