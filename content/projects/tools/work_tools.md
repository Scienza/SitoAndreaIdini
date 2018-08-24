---
title: "Tools of the trade"
date: 2018-05-06T17:12:41+02:00
draft: false
tags: ["Meta", "Carpentry"]
categories: ["Tools"]
background: "/assets/img/placeholders/pic3.jpg"
subtitles: "Modern tools to be a theoretical physicist"
# summary: "This post wants to provide a good list of the tools of the trade you need to work as a theoretical physicist with a computation focus, i. e. in my group."
---
# Theoretical Physics and computers

This post wants to provide a good list of the tools of the trade you need to work as a theoretical physicist with a computation focus, i. e. in my group.

There are plenty of resources and must read to become a good scientist, and a theoretical physicist in particular, redacted by more qualified people than me. Most famously, the reading list provided by [Gerald 't Hooft](http://www.goodtheorist.science). This list is a prerequisite for any ambitious theoretical physicist.
On a more modest (but general) scale my outreach group's list, [ScienzaList](https://github.com/Scienza/ScienzaList).

However, this post has a more down-to-earth approach on providing a pragmatical list of tools and software you will end up using, in the day-to-day work as a theoretical physicist and developer of computational software.

## Summary

- Editorial
  - [Latex](#Latex)
  - [Plotting and visualizing](#plotting and visualizing)
- Software Carpentry
  - version control
  - `vim` vs `emacs`
  - modern IDE
  - debugger
- Software Engineering
  - Languages

## Editorial

When you have results you will have to write them up (or, even better, write while gathering results) and share them with the community. To do you will have to do some basic _editorial work_, which include the drafting, proof editing and submission of your manuscript.

The drafting of a manuscript include the writing process in a format accepted by publishers. Despite the fact that _markdown_ is getting traction (and I suggest to use it for quick notes and code documentation), [Latex](#Latex) is the standard in academic publishing.

Numerical results are then usually plotted and visualized in figures

### Latex

Latex is an opensource editorial system. It is the de-facto standard in academic physics publishing so its learning is *not* optional or up to discussion. Even if you plan to compute everything with your head and fingers, you will have to submit your results through the editorial process with a Latex written manuscript (or pay hefty processing fees).

Formally is a markup language, which means that is intended to comment and process documents (like html), but is actually Turing complete. That means that you _can do_ literally anything you can do on a computer, but doesn't mean you _should_. Comments and versioning are better to be handled by [git](#version control). Even though there are several packages for plotting and illustrating directly in Latex, I find them inefficient and poor compared to dedicated [graphical](#plotting and visualizing) solutions.

[Revtex](https://journals.aps.org/revtex) is the Latex framework used by the american physical society (APS), which is, among other things, the publisher of Physical Review series of journals.

There are several dedicated IDE for Latex, my absolute favorite is [Kile](https://kile.sourceforge.io), but [TeXmaker](http://www.xm1math.net/texmaker/index.html) is multiplatform. Note also [overleaf](https://www.overleaf.com), which provides a web based Latex developement platform especially suited for collaboration. However, it is based on proprietary software.

### Plotting and visualizing

gnuplot, matplotlib, inkscape/illustrator, powerpoint/beamer

## Software Carpentry

### version control

### `vim` vs `emacs`

### Modern IDE

### Debugger

## Software Engineering

### Languages
