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

However, this post has a more down-to-earth approach on providing a pragmatical list of tools and software you will end up using, in the day-to-day work as a theoretical physicist and developer of computational software. At variance with string theory, you can practice these sort of skills in the sparetime, and before starting the physics education.

- [Theoretical Physics and computers](#theoretical-physics-and-computers)
    - [Editorial](#editorial)
        - [Latex](#latex)
        - [Plotting and visualizing](#plotting-and-visualizing)
    - [Software Engineering for scientists](#software-engineering-for-scientists)
        - [A good scientific program](#a-good-scientific-program)
        - [Languages](#languages)
        - [Design Patterns](#design-patterns)
        - [Library use](#library-use)
    - [Software Carpentry](#software-carpentry)
        - [OS](#os)
        - [Terminal](#terminal)
        - [Version Control](#version-control)
        - [`vim` vs `emacs`](#vim-vs-emacs)
        - [Modern IDE](#modern-ide)
        - [Debugger](#debugger)

## Editorial

This is the part that comes last in the scientific process, but is the part that absolutely everybody has to go through. As such, I will report it first.
When you have results you will have to write them up (or, even better, write while gathering results) and share them with the community. To do you will have to do some basic _editorial work_, which include the drafting, proof editing and submission of your manuscript.

The drafting of a manuscript include the writing process in a format accepted by publishers. Despite the fact that _markdown_ is getting traction (I am using it right now to draft this document, and I suggest to use it for quick notes and code documentation), [Latex](#latex) is the standard in academic publishing.

Numerical results and conceptual schemes are then usually [plotted and visualized](#plotting and visualizing) in figures.

### Latex

Latex is an opensource editorial system. It is the de-facto standard in academic physics publishing so its learning is **not optional** or up to discussion. Even if you plan to compute everything with your head and fingers, you will have to submit your results through the editorial process with a Latex written manuscript (or pay hefty processing fees). Latex documents are beautifully put together and its equation rendering has no peer.

Formally is a markup language, which means that is intended to comment and process documents (like html), but is actually Turing complete. That means that you _can do_ literally anything you can do on a computer, but doesn't mean you _should_. Comments and versioning are better to be handled by [git](#version control). Even though there are several packages for plotting and illustrating directly in Latex, I find them inefficient and poor compared to dedicated [graphical](#plotting and visualizing) solutions.

[Revtex](https://journals.aps.org/revtex) is the Latex framework used by the american physical society (APS), which is, among other things, the publisher of Physical Review series of journals.

There are several dedicated IDE for Latex, my absolute favorite is [Kile](https://kile.sourceforge.io), but [TeXmaker](http://www.xm1math.net/texmaker/index.html) is multiplatform. Note also [overleaf](https://www.overleaf.com), which provides a web based Latex developement platform especially suited for collaboration. However, it is based on proprietary software.

### Plotting and visualizing

There are infinite and infitely evolving tools to graphic design. _Data visualization_ is a field of is own right, that is rapidly expanding as new tools becomes available, and appreciated by larger audiences.

The necessities of a theory scientist are relatively limited, but a lot of exposure can be gained with usage and skill on appropriate tools.
Most importantly, sometimes insight can be gained just by changing the graphical representation of things. Depends a lot if you are a visually or textually oriented thinker how much you should invest in this section, but is never wasted time.

The basic thing to do is to make your code print-out an ASCII file with the data you want plotted on lines and columns. After that, to use a program which reads the files and graphically shows the output in form of scatterplot or line plot which are the two most common plot types in physics.
There are [plenty](https://datavizcatalogue.com) of other type of graphical tools that can be used to deliver a message, but familiarize yourself with the basics before "finding your own voice".

Tools commonly used by our community to plot are:

- [gnuplot](http://gnuplot.info): a simple but powerful and quick plotting tool. I use it for quickly visualizing results, but rarely for production anymore. Simply `pl 'filename' u column_x:column_y` for a scatter plot, substituting `column_x` and `column_y` the number of column in `'filename'` for x and y (e.g. u 1:2). Add `w l` for a line plot. Repeat after a comma (`pl 'file' u 1:2, 'file' u 1:3`) for multiple column plotting;
- [matplotlib](https://matplotlib.org): the "new" game in town. Extremely versatile and powerful to use, and nice and modern to view. It is a python library, with many [sublibraries and frameworks](https://blog.modeanalytics.com/python-data-visualization-libraries/) in the family. This is what I mostly use today.
- xmgrace: the "old" game in town. Stunning results, but limited in versatility and ease to use.

After plotting, you might need to edit (not the data!). To do so a _vectorial editor_ is the best choice. Raster editor, like photoshop, work on pixels. Vectorial editors, work on lines and therefore have infinite resolution. These are ideal for data visualization, since it preserve precision in the definition of data (you could jump one pixel up/down in a raster image, but not in a vector image), and editorial quality. Inkscape is the best tool for this job. It is the reference point for vector graphic. It is especially useful to scientists thanks to an embedded latex rendering engine since v 0.48.

Another discussion merits spreadsheet editors (e.g. excel). They are quick and dirty ways with integrated processing and plotting capabilities. I do not suggest to use them for production work, since there is much that can go wrong remaning hidded. But if you have to do, excel is extremely efficient. Gnumeric is the open-source alternative that comes closer.

Finally, presentation of ideas during conferences and talks is integral part of being a scientist. Despite the fact that scientists tend to look at cold facts rather than fancy presentation, keeping presentation clean, simple, and visually appetizing goes a long way in attracting the attention of the audience and thus exposing your research.  A whole post could be dedicated to scientific presentations. In this context, the tool used to make presentation are either beamer (a Latex-based slide template), or powerpoint and its clones. Choose beamer if you want to fill the slide with details and mathematical expressions, use power point for a more visual and minimalistic approach.

## Software Engineering for scientists

Nowadays programs are a cornerstone almost every aspect of the service and industrial economy. There are many ways and scopes to program, but why does a theoretical physicist program? We physicist formalize our understanding of the world in terms of equations that require calculation. With computers we can compute the results of these calculation for a system that we want study. Doing so, we realize if our equations are a valid representation of the real world or not. To run these computations, we need to code efficient numerical programs, that can give us the answer in finite time, with finite resources.

A scientist is a person which has a particular interest to quantitatively understand some areas of the universe. The practical objective of a scientist making use of computatations, is to build his **code-base**. That is his own "tool-box", which he uses to study the universe. Depending on the physics that he wants to do, this can be more or less difficult, require more of less knowledge of computational machines, and being more or less crucial to his final goal to quantitative understand his favorite slice of universe. The best and most useful codes you shared with the community, and the world. Some of it is published in [Computer Physics Communication](https://www.journals.elsevier.com/computer-physics-communications), where a database of scientific codes since 1969 is available.

Software engineering is the application of design and analysis principles to software production. This is a huge field, and most of the software engineering principles do not naively apply to computational software programmed by physicist, since our aims are very specific respect to the broad use of informatics in the information age.
The old generation of theoretical physics community approached this field as per this quote by prominent computer scientist Dijikstra: _"software engineering has accepted as its charter "How to program if you cannot."_

However, is indisputable that the choices you make in the writing of the code, define the capability, efficiency and mantainability of the software itself. That is, the ability of your _code-base_ to study the universe. That is, the outcome of your work. Therefore, choose wisely.

### A good scientific program

Wisely means that every decision should tend to optimize your present and future return on the time investment, and few principles of software engineering help in maximizing this returns. If I can boil it down to one lesson: always program so that the physics will be clear in the output, therefore usable across a framework that reflects your ideas for the field. Try to guarantee the [5R of scientific programming](https://www.frontiersin.org/articles/10.3389/fninf.2017.00069/full), that are:

- re-runnable: the to code stuff has to be runned over the years, not for a single instances. Container tecnology (e.g. docker) can help providing the correct environment for consistently re-runnable code.
- repeatable: the code has to give consistent results upon re-runs, otherwise it is not deterministic nor scientific.
- reproducible: Provide enough comments/documentation so that any other party (including the you of 5 years into the future) can use the program and replicate the results without fail.
- reusabile: the code can be used in different context, providing input to a third code or as routine.
- replicable: the algorithms used within the code have to be well specifified when you write it up or use it in a paper or a thesis. Provide enough details to make it possible to write the code again, eventually in a different language.

[Design patterns](#Design Patterns) might help you to guarantee the repeatability and reusability of the code, so are good principles to study.

### Languages

After the algorithm and the physics, the choice of language is the biggest design decision for the writing of a code. It will impact the future re-runnability, performance, and reusability within and outside of your code-base.

This choice depends:

- on the type of software you plan to do, and in general your are prone to do in your caree
- on knowledge and time constrains you have.
- on availablity of previous code and libraries.

A lot of nuclear physics is nowadays in the regime of high-performance computing, but there is a lot of physics to be done with pen-and-paper, or computationally trivial codes. This will impact the choice of language and [paradigm](https://en.wikipedia.org/wiki/Programming_paradigm). Most scientific numerical computing happens in imperative programming, where code lines consequentially change the machine state. This can be either procedural, that is based on subroutines/functions, or object-oriented.

The languages used in our subcommunity, and in my group:

- [Fortran](https://en.wikipedia.org/wiki/Fortran): procedural. 
- [C++](https://en.wikipedia.org/wiki/C%2B%2B): object-oriented.
- [python](https://en.wikipedia.org/wiki/Python_(programming_language)): object-oriented high level.

### Design Patterns

Gang of Four

### Library use

- Lapack
- Blas
- Parser

## Software Carpentry

[Software carpentry](https://software-carpentry.org) is the put in practice the principles of engineering. That is, the art of making the machine purring at your tune.

- notebooks: 

### OS

- Linux
- OSX
- Mac

### Terminal

- .bashrc
- queue systems

### Version Control

### `vim` vs `emacs`

### Modern IDE

### Debugger
