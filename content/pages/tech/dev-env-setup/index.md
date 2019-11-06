---
title: Development Environment Setup
date: "2019-11-04"
---

So I recently built a PC, and had to get my full development environment set up again. It was quite a hassle, primarily because I hadn't properly written down what I had done to set it up on my laptop for all these years. This document should ensure that that doesn't happen again.

# Windows Installation

- [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- [Ubuntu 18.04](https://www.microsoft.com/en-us/p/ubuntu-1804-lts/9n9tngvndl3q) (the latest Ubuntu distro at the time of writing)
- [wsltty](https://github.com/mintty/wsltty)
- [Atom](https://atom.io)
- [Cascadia Code](https://github.com/microsoft/cascadia-code)
- [Git for Windows](https://git-scm.com)

# Setup

## Atom

Restore backup for Atom with `sync-settings`, with a new `Personal Access Token` with `gist` access: https://github.com/settings/tokens/new

## WSLtty

- Set `wsltty` settings
  - Text
    - Font: `Cascadia Code`
    - Size: `14pt`
  - Looks
    - Cursor: `Block`, not blinking
  - Terminal
    - Bell: `no beep`

## WSL

- Turn off password for `sudo` access:
  - `$ sudo visudo`
  - Add line at the bottom: `sarang ALL=(ALL) NOPASSWD: ALL` (beware the fearful editor, Nano!)
- Move home directory:
  - Edit `/etc/passwd` and change `/home/sarangj` in the current user's line (most likely at the bottom) to `/mnt/c/Users/<USERNAME>`
- Turn off `command-not-found`

```
$ sudo apt remove command-not-found command-not-found-data
```

- Turn on metadata for `/mnt/c`: https://devblogs.microsoft.com/commandline/chmod-chown-wsl-improvements/
- Clone and install dotfiles:

```
$ mkdir -p ~/git && cd ~/git
$ git clone git@github.com:sarangjo/dotfiles.git
$ cd ~/git/dotfiles
$ ./install.sh
```

## Vim

- Install [GVim for Windows](https://www.vim.org/download.php)
- Install Vundle and `vim` packages

```
$ git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
$ vim
:VundleInstall
```

## NodeJS

This is a bit convoluted, since you want the baseline `nodejs` to install `yarn`, to install `n`, after which you can get rid of the baseline `nodejs`.

1. Baseline [nodejs](https://nodejs.org)

- Windows: https://nodejs.org/en/download/
- WSL:

```
$ sudo apt install -y nodejs
```

2. [Yarn](https://yarnpkg.com)

- Windows: https://yarnpkg.com/en/docs/install#windows-stable
- WSL:

```
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt update && sudo apt install -y yarn
```

3. [n](https://github.com/tj/n) for nodejs version management

```
$ yarn global add n
$ n latest
$ sudo apt remove nodejs
```

## Python 2.7 and 3.7

```
$ sudo apt install -y python2.7 python3.7 python3.7-venv`
```

## Misc

```
$ sudo apt install -y exuberant-ctags
```
