---
title: "Tools of the trade"
date: 2018-05-06T17:12:41+02:00
draft: false
tags: ["Meta", "Carpentry"]
categories: ["Tools"]
background: "/img/terminal.png"
subtitles: "Modern tools to be a theoretical physicist"
# summary: "This post wants to provide a good list of the tools of the trade you need to work as a theoretical physicist with a computation focus, i.e. in my group."
---
# Theoretical Physics and computers

This post wants to provide a good list of the tools of the trade you need to work as a theoretical physicist with a computational focus, i.e. in my group.

There are plenty of resources and must read to become a good scientist, and a theoretical physicist in particular, redacted by more qualified people than myself. Most famously, the reading list provided by [Gerald 't Hooft](http://www.goodtheorist.science). This list is a prerequisite for any ambitious theoretical physicist.
On a more modest (but general) scale my outreach group's list, [ScienzaList](https://github.com/Scienza/ScienzaList).

However, this list has a more down-to-earth approach on providing a pragmatical list of tools and software you will end up using, in the day-to-day work as a theoretical physicist and developer of computational software. At variance with string theory, you can practice this sort of skills in the spare time, and eventually before starting the formal physics education.

Is not possible to expect that every item here explained is crossed and mastered, this has the spirit of a wishlist, for myself included. It provides a (hopefully) useful canvas to follow and building up from.

> > _If I had five minutes to chop down a tree, I’d spend the first three sharpening my axe._
> 
> -Abraham Lincoln, probably apocryphal

- [Theoretical Physics and computers](#theoretical-physics-and-computers)
    - [Editorial](#editorial)
        - [Latex](#latex)
        - [Plotting and visualizing](#plotting-and-visualizing)
    - [Software Engineering for scientists](#software-engineering-for-scientists)
        - [A good scientific program](#a-good-scientific-program)
        - [Computer Science](#computer-science)
        - [Languages](#languages)
        - [Numerical management](#numerical-management)
        - [Library use](#library-use)
        - [High performance computing](#high-performance-computing)
        - [Design Patterns](#design-patterns)
    - [Software Carpentry](#software-carpentry)
        - [OS](#os)
        - [Terminal](#terminal)
        - [bash scripting](#bash-scripting)
        - [`vim` vs `emacs`](#vim-vs-emacs)
        - [Version Control and collaboration](#version-control-and-collaboration)
        - [Modern IDE](#modern-ide)
        - [Debugger](#debugger)
    - [Other resources](#other-resources)

## Editorial

This is the part that arguably comes last in the scientific process, but is the part that absolutely everybody has to go through. As such, I will report it first.
When you will have scientific results you will have to write them up (or, even better, write while gathering results) in order to share them with the community in form of thesis or article. To do you will have to do some basic _editorial work_, which includes the drafting, proof editing, and submission of your manuscript.

The drafting of a manuscript includes writing in a format accepted by publishers. Despite the fact that _markdown_ is getting traction (I am using it right now to draft this document, and I suggest to use it for quick notes and code documentation), and Microsoft Word is the most common writing software in the private sector, [Latex](#latex) is the standard in academic publishing.

Numerical results and conceptual schemes are then usually [plotted and visualized](#plotting and visualizing) in figures.

### Latex

Latex is an open-source editorial system. It is the de-facto standard in academic physics publishing so its learning is **not optional** or up to discussion. Even if you plan to compute everything with your head and fingers, you will have to submit your elaborations through the editorial process with a Latex written manuscript (or pay hefty processing fees). Latex documents are beautifully put together and its equation rendering has no peer.

Formally Latex is a markup language, which means that is intended to comment and process documents (like html), with a syntax that you don't see in the final product (_what you see is what you mean_ type of editor). However, it is actually Turing complete. That means that you _can do_ literally anything you can do on a computer, but doesn't mean you _should_. Comments and versioning are better to be handled by [git](#version-control). Even though there are several packages for plotting and illustrating directly in Latex, I find them inefficient and poor compared to dedicated [graphical](#plotting-and-visualizing) solutions.

To be noted, that [Revtex](https://journals.aps.org/revtex) is the Latex framework used by the american physical society (APS), which is, among other things, the publisher of Physical Review series of journals.

There are several dedicated IDE for Latex, my absolute favourite is [Kile](https://kile.sourceforge.io), but [TeXmaker](http://www.xm1math.net/texmaker/index.html) is multiplatform. Note also [overleaf](https://www.overleaf.com), which provides a web based Latex development platform especially suited for collaboration. However, it is based on proprietary software.

### Plotting and visualizing

There are infinite and infinitely evolving tools to graphic design. _Data visualization_ is a field of is own right, that is rapidly expanding as new tools becomes available, and appreciated by larger audiences.

The necessities of a theory scientist are relatively limited, but a lot of exposure can be gained with usage and skill on appropriate tools.
Most importantly, sometimes insight can be gained just by changing the graphical representation of things. Depends a lot if you are a visually or textually oriented thinker how much you should invest in this section, but is never wasted time.

The basic thing to do is to make your code print-out an ASCII file with the data you want plotted on lines and columns. After that, to use a program which reads the files and graphically shows the output in form of scatterplot or line plot which are the two most common plot types in physics.
There are [plenty](https://datavizcatalogue.com) of other type of graphical tools that can be used to deliver a message, but familiarize yourself with the basics before "finding your own voice".

Tools commonly used by our community to plot are:

- [gnuplot](http://gnuplot.info): a simple but powerful and quick plotting tool. I use it for quickly visualizing results, but rarely for production anymore. Simply `pl 'filename' u column_x:column_y` for a scatter plot, substituting `column_x` and `column_y` the number of column in `'filename'` for x and y (e.g. u 1:2). Add `w l` for a line plot. Repeat after a comma (`pl 'file' u 1:2, 'file' u 1:3`) for multiple column plotting;
- [matplotlib](https://matplotlib.org): the "new" game in town. Extremely versatile and powerful to use, and nice and modern to view. It is a python library, with many [sublibraries and frameworks](https://blog.modeanalytics.com/python-data-visualization-libraries/) in the family. This is what I mostly use today.
- xmgrace: the "old" game in town. Stunning results, but limited in versatility and ease to use.

After plotting, you might need to edit (not the data!). To do so a _vectorial editor_ is the best choice. Raster editor, like photoshop, work on pixels. Vectorial editors, work on lines and therefore have infinite resolution. These are ideal for data visualization, since it preserve precision in the definition of data (you could jump one pixel up/down in a raster image, but not in a vector image), and editorial quality. Inkscape is the best tool for this job. It is the reference point for vector graphic. It is especially useful to scientists thanks to an embedded latex rendering engine since v 0.48.

Another discussion merits spreadsheet editors (e.g. excel). They are quick and dirty ways with integrated processing and plotting capabilities. I do not suggest to use them for production work, since there is much that can go wrong remaining hidden. But if you have to do, excel is extremely efficient. Gnumeric is the open-source alternative that comes closer.

Finally, presentation of ideas during conferences and talks is integral part of being a scientist. Despite the fact that scientists tend to look at cold facts rather than fancy presentation, keeping presentation clean, simple, and visually appetizing goes a long way in attracting the attention of the audience and thus exposing your research.  A whole post could be dedicated to scientific presentations. In this context, the tool used to make presentation are either beamer (a Latex-based slide template), or Powerpoint and its clones. Choose beamer if you want to fill the slide with details and mathematical expressions, use power point for a more visual and minimalistic approach.

## Software Engineering for scientists

Nowadays programs are a cornerstone almost every aspect of the service and industrial economy. There are many ways and scopes to program, but why does a theoretical physicist program? We physicist formalize our understanding of the world in terms of equations that require calculation. With computers we can compute the results of these calculation for a system that we want study. Doing so, we realize if our equations are a valid representation of the real world or not. To run these computations, we need to code efficient numerical programs, that can give us the answer in finite time, with finite resources.

A scientist is a person which has a particular interest to quantitatively understand some areas of the universe. The practical objective of a scientist making use of computations, is to build his **code-base**. That is his own "tool-box", which he uses to study the universe. Depending on the physics that he wants to do, this can be more or less difficult, require more of less knowledge of computational machines, and being more or less crucial to his final goal to quantitative understand his favourite slice of universe. The best and most useful codes you shared with the community, and the world. Some of it is published in [Computer Physics Communication](https://www.journals.elsevier.com/computer-physics-communications), where a database of scientific codes since 1969 is available.

Software engineering is the application of design and analysis principles to software production. This is a huge field, and most of the software engineering principles do not naively apply to computational software programmed by physicist, since our aims are very specific respect to the broad use of informatics in the information age.
The old generation of theoretical physics community approached this field as per this quote by prominent computer scientist Dijikstra: _"software engineering has accepted as its charter "How to program if you cannot."_

However, is indisputable that the choices you make in [organizing your work](https://en.wikipedia.org/wiki/Software_development_process) and the writing of the code, define the capability, efficiency and maintainability of the software itself. That is, the ability of your _code-base_ to study the universe. That is, the outcome of your work. Therefore, choose wisely.

### A good scientific program

Wisely means that every decision should tend to optimize your present and future return on the time investment, and few principles of software engineering help in maximizing this returns. If I can boil it down to one lesson: always program so that the physics will be clear in the output, therefore usable across a framework that reflects your ideas for the field. Try to guarantee the [5R of scientific programming](https://www.frontiersin.org/articles/10.3389/fninf.2017.00069/full), that are:

- re-runnable: the to code stuff has to be run over the years, not for a single instances. Container technology (e.g. docker) can help providing the correct environment for consistently re-runnable code.
- repeatable: the code has to give consistent results upon re-runs, otherwise it is not deterministic nor scientific.
- reproducible: Provide enough comments/documentation so that any other party (including the you of 5 years into the future) can use the program and replicate the results without fail.
- reusabile: the code can be used in different context, providing input to a third code or as routine.
- replicable: the algorithms used within the code have to be well specified when you write it up or use it in a paper or a thesis. Provide enough details to make it possible to write the code again, eventually in a different language.

[Design patterns](#Design Patterns) might help you to guarantee the reproducibilty and reusability of the code, so are good principles to study.

### Computer Science

To prepare for scientific programming, is crucial to brush up on the fundamentals of computer science. Together with Latex, this is the other part is **not** optional for a theoretical physicist. The rest you _could_ wing it, or delegate (not that you _should_, or that is the most efficient, but depends on your scientific objective).

Data types (arrays, lists, dictionaries ...), algorithms (bisection, hashtable, quicksort, graph traversal ...), numerical analysis (numerical derivatives, Gauss-Newton, trapezoid integration ...). You can find visualization visualizations of the most fundamental algorithms [here]((https://visualgo.net/en).

The ultimate source of wisdom are the Knuth volumes "The art of computer programming". Pass by my office if you want to borrow a copy. More introductory textbooks are:["Introduction to algorithms"](https://mitpress.mit.edu/books/introduction-algorithms-third-edition), ["a first course in numerical methods"](https://www.amazon.com/Numerical-Methods-Computational-Science-Engineering/dp/0898719976/ref=sr_1_1?ie=UTF8&qid=1535323350&sr=8-1&keywords=%22a+first+course+in+numerical+methods%22).

### Languages

After the algorithm and the physics, the choice of language is the biggest design decision for the writing of a code. It will impact the future re-runnability, performance, and reusability within and outside of your code-base.

This choice depends:

- on the type of software you plan to do, and in general your are prone to do in your career
- on knowledge and time constrains you have.
- on availability of previous code and libraries.

A lot of nuclear physics is nowadays in the regime of high-performance computing, but there is a lot of physics to be done with pen-and-paper, or computationally trivial codes. This will impact the choice of language and [paradigm](https://en.wikipedia.org/wiki/Programming_paradigm). Most scientific numerical computing happens in imperative programming, where code lines consequentially change the machine state. This can be either procedural, that is based on subroutines/functions, or object-oriented.

Only Fortran and C++ are fully supported in high performance computing, with direct embeddings in MPI, openMP and cuda. Therefore, the languages generally used in our subcommunity, and in my group:

- [Fortran](https://en.wikipedia.org/wiki/Fortran): procedural. One of the first compiled languages, first appeared in 1957 is still going strong in the scientific community. Is very easy to learn, and to master, keeping you focus on what matters: the algorithms. [Hosphe](http://cpc.cs.qub.ac.uk/summaries/AEGK_v1_0.html) is written in this language, together with the most efficient linear algebra library, LAPACK (and its massive computing version, ScaLAPACK). [Tutorials](http://fortranwiki.org/fortran/show/Tutorials).
- [C++](https://en.wikipedia.org/wiki/C%2B%2B): object-oriented++. First appeared in 1985 and constantly updated (C++17 being the last revision). Many modern codes are based on C++ (sometimes with bindings to Fortran, as in [BoccaDorata](http://personal.ph.surrey.ac.uk/~cb0023/bcdor/bcdor/Comp_Many-Body_Phys.html)). It is an extremely powerful and versatile language, with the potential to support every programming paradigm. Has the considerable advantage of defining objects with properties and overload operation (e.g. a wavefunction, with its over a basis and a definition of inner product).[Official Tutorial](http://www.cplusplus.com/doc/tutorial/), [List](https://hackr.io/tutorials/learn-c-plus-plus).
- [python](https://en.wikipedia.org/wiki/Python_(programming_language)): object-oriented high level. Python is the "new" kid getting a lot of traction. It is an intuitive object oriented programming. In python everything is an object, everything is implicit, this makes python very versatile and easy to use. There is a wealth of libraries, for every scope. Important for us, and not as easily available in the other two languages, is visualization. [Official Tutorial](https://docs.python.org/3/tutorial/), [The hard way](https://learncodethehardway.org/python/).

An example of a complex computing application, can be a code that diagonalizes an Hamiltonian to obtain the eigenstates of a system. An instance of python could elaborate input, through a parser and reading, and outputs, writing on file and handling the [matplotlib visualization](#plotting-and-visualizing). This will call a C++ code, where classes define the wavefunctions, basis states...etc... that carries the actual physical content, while the diagonalization itself on a cluster is handled through Fortran and ScaLAPACK.

Declarative languages deserve another chapter. These are languages where you specify the intent, and then the machine decides the order of computation based on the rule you set up. These are often used for things that don't concern numerical computing (e.g. javascript asynchronous programming, cornerstone of modern front-end web development). 

However, there are a number of paradigms which are very effective in science, even though not always for numerical computing.

- [Mathematica](https://www.wolfram.com/mathematica/): it is well known for the almost supernatural capabilities of symbolic programming. Mathematica is able to calculate analytical derivation with relentless precision. It is also useful for the functional programming capabilities. I used it [here](https://pos.sissa.it/204/002/pdf), to calculate beta decay properties of a nucleus falling in a neutron star. It is has been useful to adjust and calculate a complicated expression at different conditions of temperature and pressure.
- [Haskell](https://www.haskell.org): *the* functional programming language. Some people in nuclear physics use it for metaprogramming (programming something that writes a program). I started but then resorted to C++ nonetheless.

### Numerical management

Since what you want is to input/output numbers, your primary concern should be that these numbers are treated as accurately as possible. In order to do so, you need to understand some basics of computer science related to numerical precision.

Number are saved in the machine in binary code, with a specific method in order to account for sign and floating points. The bits you dedicate to storing a number, impact the precision and its extremal values. The standard _single-precision_ is 32 bits, but nowadays common processors are 64 bits and therefore _double precision_ is more often used (apart from GPU computations) since it does not impact too much the performance anymore. An arbitrary precision is sometimes used in physics computation (in fortran is `real (kind = num)` to setup a defined precision up to arbitrary number of bits).

This is the domain of [floating point arithmetic](https://en.wikipedia.org/wiki/Floating-point_arithmetic). That is, the discretization of real numbers carries an error of precision and subtleties in the calculation that you should dominate.

You can find more in an introductory book on computer science, or in more advanced books such as: _"Numerical Methods for scientist and engineers"_, Hamming, and_"The Art of Programming"_, Knuth, especially Chapter 4 of volume 2.

### Library use

Libraries and reuse of code are an important part of efficient development. Good libraries are thoroughly tested and efficient, and extend the capabilities of a code with simple calling commands. Are one of the main reasons to choose a language over another, and one of the main advantages of Fortran, C++ and python over other languages.

The scientific community now typically uses linear algebra and scientific libraries, such as LAPACK and BLAS in Fortran. Boost, Eigen, Armadillo are useful scientific libraries of C++. Python makes extensive use of libraries, and is intrinsic in a development of a python code to use them extensively: Numpy, Pandas, scikit-learn, tensorflow, matplotlib are just few examples.

Libraries however can be used for much more than numerical elaboration and graphical visualization. Using libraries simplifies development and implementation of features.
For example:

- [googletest](https://github.com/google/googletest) helps in testing the code containing all the routines you need for comparing numbers and objects, and makes it possible to adopt a [test driven development](https://en.wikipedia.org/wiki/Test-driven_development) approach.
- [googleflags](https://github.com/google/googletest) helps with defining a parser where you can input properties and option of the program you want to run.
- [glogs](https://github.com/google/glog) keeps and writes the record of running, that is, the output with different levels of verbosity and error codes.
- [Boost](https://www.boost.org/doc/libs/) libraries not only contains useful algorithms, but also its own logger, parser, tester. Moreover, it has also has useful structures (Trees and graphs, arrays ...etc...) that can be used together or substituting the [Standard Template Library (STL)](https://en.wikipedia.org/wiki/Standard_Template_Library).

Equivalent libraries can be easily found for python or other languages.

In general when considering adding a feature to a program, try to find other programs or libraries that have solved the problem before, and determine the extent in which this is useful for you. Sometimes few minutes of google and github searches saves you a month of developing your own class.

Finally, Libraries are a staple of high performance computing, since the usage and construction of libraries makes it possible to efficiently run code on platform with radically different architecture, such as massively parallel environment using ScaLAPACK, and GPU graphic cards using cuBLAS.

### High performance computing

When the code is run on massively parallel machines, i.e. supercomputers, is called high performance computing. This is now a subfield of computer science, with plenty of strategy and methods to separate the computing load over different nodes of a cluster and over different processors.
Basically the main difficulty and engineering choice in the development of a supercomputer code, is the strategy for sharing information between and within nodes of a cluster.

Communicating between different geographical locations, is considerably slower than communicating within nodes of a dataserver (which use a special, and expensive, connection). 
Communicating between nodes is considerably slower than communicating within a node. 
Communicating between CPU and accelerator (GPU or Xeon Phi) is considerably slower than between CPU and memory.
Finally, communicating between CPU and memory is considerably slower than between the cache and registry level of a CPU. 
With this in mind, the objective of a computational scientist is to program algorithms that exploit the potential of resources wasting as little time as possible on the bandwidth.

To do so, the memory is divided into chunks, and different memory sharing paradigms are used in a calculation. In a Shared-nothing architecture, each computational node is independent and self-sufficient. To achieve so, the same information is redundantly dispersed in many computational units. On the contrary, in a shared-everything architecture memory is shared between units, and therefore the same information in the same location is broadcasted and used in the different units of computing.

Embarrassing parallelization is the easiest form of parallelization and a form of shared-nothing architecture. It consist of running the same code, with different inputs, on different nodes of computing. The only thing needed for implementing this is a good use of [bash scripting](#bash-scripting) and eventually the queue system. 

However, to share-_something_ in a computation, one has to send messages to and from different processes and employ a more sophisticated approach. To help managing the processing and memory load for a parallel computation, we use several libraries:

- [MPI](https://en.wikipedia.org/wiki/Message_Passing_Interface): is a protocol of information exchange between shared-nothing nodes, making them less egoist since they now exchange what you explicitly declare. This information exchange is fundamental to run codes on different computing nodes and enables exploiting not only larger processing resources, but also larger memory availability in the sum of the different nodes. However, the shared information will be duplicated. An MPI call spawns several *processes*, that are isolated computational units. Therefore, an MPI program running on a single machine, will have less memory available for the computation in each process. e.g. 16 MPI processes on a 16 core, 128GB memory machine, will generate 1 process per core, with 8 GB of memory each. [Tutorial](https://computing.llnl.gov/tutorials/mpi/).
- [openMP](https://www.openmp.org/): openMP works on a shared-everything architecture. Therefore it is ideal to be run on a single machine. openMP will spawn several *threads* for a single process that can read the whole memory available. [Tutorial](https://computing.llnl.gov/tutorials/openMP/). *Note*: C++11 and Fortran2003 contain *vectorization* options, that parallelize the code as a naive implementation of openMP would do.
- openCL/[openACC](https://en.wikipedia.org/wiki/OpenACC): is an open protocol for parallelization through accelerators. That is additional cards that are included in a computer and have additional (and usually very efficient and abundant and characterized by a high degree of parallelization) processing capability. Today, mostly of these are Graphic Cards, that can be used for efficient computation. [Tutorial](https://www.openacc.org/get-started). Note: consumer graphic cards (Nvidia GeForce, ATI Radeon...) allow for single precision computations, professional and computing dedicated graphic chips (NVidia Quadro and Tesla) are needed for double precision.
- [Cuda](https://developer.nvidia.com/cuda-zone): is the proprietary Nvidia language for implementing computing in its accelerators. It is the de-facto standard in accelerated application. [Tutorial](https://developer.nvidia.com/how-to-cuda-c-cpp).

These libraries are native in Fortran, C and C++. However, they can be ported to or embedded in other languages. This carries an overhead cost, that might be deadly or irrelevant depending on the implementation.

For more information, see e.g. [introduction to HPC](https://hpc-carpentry.github.io/hpc-intro/), and the [tutorials at Livermore national laboratory](https://hpc.llnl.gov/training/tutorials).

### Design Patterns

This is a relatively advanced topic in software engineering. You should practice the other aspects before perfecting this one. The main issue in object oriented programming is to guide the flow of information in development. Objects are "too" versatile and there is a big risk of misusing the freedom given in object oriented languages, transforming development to a resolution of ["dependencies hell"](https://en.wikipedia.org/wiki/Dependency_hell).

A good principle is the one of [GRASP](https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)). It is based on the "information expert": each class has to be constructed to be responsible of a certain element of the calculation, which has to be simple as possible, and have all the ingredient to compute it. In this way you reduce the coupling between elements and increase the cohesion within an element.

[Design patterns](https://en.wikipedia.org/wiki/Software_design_pattern) is a term introduced in the famous book "Design Patterns: Elements of Reusable Object-Oriented Software". The authors are amicably called "Gang of Four" (GoF).
Design patterns are typical structures that get often repeated in code architecture of object-oriented software.
They are part effective recipes part community standards. That, their use helps boil down a code in elements with defined behaviour, that other programmer can recognize and use to understand your design.

Moreover, I don't find most of the patterns useful in scientific calculations. However, might be convenient to learn:

- Builder and Factory method, to initialize your objects.
- Adapter and Decorator, to distribute information within the objects.
- Iterator, as the word says, a cornerstone for physics calculation (e.g. definition of integral)
- Strategies and templates, to setup algorithms behaviour within context.

## Software Carpentry

[Software carpentry](https://software-carpentry.org) is the put in practice the principles of engineering. That is, the art of making the machine purring at your tune. This makes you a more effective developer, saving precious time by the skills and automatisms perfected over the years. Carpentry is not about high level *decisions*, but on low level *execution*.

If engineering is (almost) a science, carpentry is an art. As such it is very particular to your own way of understanding and working. Nobody is in the position to tell you how you should work, but I provide some suggestions and context to some approaches you can use and what tools are most used by the theoretical physics community.

### OS

The operative system is a crucial part of your working environment, since it is what manages the hardware and software resources on your machine. Nowadays three different systems are routinely used on personal computers. Famously, these are: Linux, OSX, and Windows.

Due to the development constrains of numerical and high performance software, a [terminal](#terminal) must be integral part of a scientific development environment. Linux is what is used by most theoretical physics departments as provided workstations, and by practically all of modern supercomputers. So, most probably you will have contact with Linux machines sooner or later.

OSX, the operative system of Apple Mac machines, is based on Unix and BSD and therefore shares a lot of similarities with Linux. But maintains the perks of a commercially managed product. Good internet browsing, decent compatibility with Microsoft office, and has an handy pdf editor included. For these reasons is the favourite of many scientists, even though I personally prefer Linux and I find OSX the less reliable of the 3 systems. 
In the case you plan to use OSX, be sure that the terminal emulator you use is setted on "bash", and install [`brew`](https://brew.sh/) to manage the installation and management of development packages.

Windows, is not quite as proficient with scientific computing and development as the other two competitor. I heartily discourage to use as a development platform, and you will have to learn the Linux terminal in any case if you run simulations on department workstation and supercomputers. Even though today Windows 10 now includes a full Linux subsystem and related terminal it might be tricky to make [IDE](#ide) work in that environment. That said, the advantages in browsing and office productivity cannot be understated. Windows has been my system of choice for years, together with a VMware virtual machine running Linux.

### Terminal

The Unix terminal, a.k.a. shell, is your window in the world of scientific computing. With the terminal, you are "close to the metal" as possible, guaranteeing that you understand and have under control on what is exactly going on in your machine.
Is the faster and easiest way to access remote machines. This is something routinely done by computational physicists, to manage and use remote workstations or supercomputers.

The terminal runs on textual commands. A command does an action on your system, e.g. writing `ls` on the terminal shell, and submitting the command with `enter`, shows the list of files in the present directory. A relatively ["complete list of commands"](https://ss64.com/bash/), and [a concise one](https://www.tldp.org/LDP/abs/html/basic.html). Train to use commands and remember the most fundamental (`cd, cp, mv, ln, ls, ssh`). Note that with `--help` after the command, or `man` before the commands, shows a help.

In supercomputers the queue systems regulate who has access to computational resources in a given moment. You have to study the specific system that the supercomputer uses, but is always in form of terminal commands. A particularly useful and under appreciated command when running calculation remotely is `nohup`. It disconnects a process from the terminal on which is run, enabling you to close the connection while the calculation continues to go on.

Furthermore, the terminal enables a totally personalized and versatile use of your system. Do you want to copy only the files with "out" name, both uppercase and lowercase, a number, and a ".dat" extension? Yes can do: `cp *{OUT,out}*[0-9]*.dat ./directory/`. Imagine that the files are up to GB each, and few thousands... you cannot afford the space to copy everything, neither the time to copy things one by one. Terminal to the rescue! 

**Love the shell**. You can start having fun modifying the `.bashrc` file in the home. It is a bash script, a list of terminal commands, that is run at each terminal start.

### bash scripting

Bash scripting is concatenating one command after the other in a scripting file, so that the commands are run sequentially.
It is an extremely important tool, that enable, for example, to run several codes in several directories and collect the output in a single file. [Tutorial](https://linuxconfig.org/bash-scripting-tutorial-for-beginners).

Scripting is fundamental for your work as a physicist. Sooner or later you will have to fine-tune your calculation and answer technical, but important, questions such as: is the simulation converged in this space? To do so you have to run several calculations, with different spaces, and see if the quantity you want to simulate is the same over a certain threshold.
You can do it by hand, and running the calculations one by one. But way more comfortable and efficient to just setup a script that runs everything at a touch of a command, and then checking the results after all the calculations are done.

Bash script, being a concatenation of several commands, is ideally suited for this role. But almost all languages have the possibility of running command lines, therefore can be used as scripting language. You can use different languages to script, according to how complex and computationally intensive one task is, but usually the simpler the better. 
Bash does the job. You can use Python if you need more flexibility and if you plan to use control cycles (if, loops ...) or plotting results.

### `vim` vs `emacs`

Because of the extensive use of the terminal, sometimes in remote instances, you will be in the situation where you will like to edit a file without resorting to graphical interface. For this, it will be crucial to learn a text editor that works directly on the shell. The two most popular and advanced alternatives are `vim` and `emacs`. Both are extremely powerful, probably are still the most advanced IDE and editor around.
The two editors have haters and lovers, famously fuelling a feud that runs rampant involving generations of scientist. 

My view is that `vim` is more of an editor. You enter when you want to change some text, you exit to compile the code and run it (even though it can be done within `vim`). `emacs` is more of an IDE, where you can do absolutely everything and with enough proficiency could practically substitute the whole terminal. It is even programmable with LUA, guaranteeing absolute personalization.

Pick the one that suits your personality and ideal working environment. Personally, I like `vim` more, because I use it as an editor and appreciate the minimalist but command-like approach of vim bindings. I also love `vim` for its capability to edit buffers of many files at once (`:argdo ...` runs a command for all filed opened, e.g. `vim *.in` for all .in files in a path).

Following the spirit of the two editors, a neat vim tutorial is available at [this link](https://www.openvim.com), while the standard emacs tutorial is launched within emacs (type in emacs `Ctrl-h` followed by `t`.)

### Version Control and collaboration

Version control is an important part of developing software in a controlled environment. It consists of tracking the versions of a given software in the development stage, enabling historical searches, collaboration, and different branches of parallel development.

You might be accustomed to have several versions of the same document/code saved in different files. For example:

{{< highlight text>}}
thesis_draft0, thesis_draft1, thesis_draft1.1, thesis_draft2,
thesis_draft2a, thesis_draft2.1a, thesis_draft_2b,
thesis_draft_2_with_appendix, thesis_final, thesis_draft3_advisor,
thesis_final_final, thesis_final_forreal,
thesis_printed, thesis_online ...etc...
{{< /highlight >}}

Version (out of) control is that. A version control system makes sure that tracking the versions of your thesis (or a code) does not become the hot mess that is the list above, but streamlines into well defined processes.

This is way more powerful than simply keeping the old files, because:

1. You can generate way more versions than copy of files.
2. This enables you to do more meaningful comparison, try quicker new things, and see what works and what doesn't.
3. You can tag the version with appropriate descriptions and comments, not only filenames or (if you are very clever, comments in the file).
4. There are different levels and granularity for the comments:
    - tags: for stable, progressive, versions (0, 1.0, 1.1 ...);
    - branches: for different, eventually parallel, branches and stages of development (a, b, with_appendix);
    - releases: for versions which are shared (advisor, printed, online).
5. Makes it way easier to collaborate, especially over remote repositories hosting services, such as [github](www.github.com).
6. most importantly, every version will be consistent with the file available at that stage, e.g. input files, other libraries...etc... helping the _repeatability_ across different versions.

There are different version control systems, but the most used in physics is [git](https://homes.cs.washington.edu/~mernst/advice/version-control.html) (jk, the most used is the file naming madness, but git comes just after that).

I suggest students to make a [github student developer account](https://education.github.com/pack), is free, is simple, and you will have private repository while you study. An alternative, if you don't have to work with me, is of course [gitlab](gitlab.com). 
However, I find the github community larger and more active. I have a [github account](https://github.com/AndreaIdini), and an active little [outreach group](https://github.com/Scienza). Repository hosts, such as github, often include several features to help with collaborative development: issue tracking, project management and statistics just to name a few.

Another important modern tool for collaboration, especially to report to your advisors (especially when the advisor is me) are notebooks. Taking the name and inspiration from mathematica's notebook interface, they are documents able to run code within the document itself.

Jupyter project has recently released an open-source version [Jupyter notebook](https://ipython.org/notebook.html), initially for python (with the iPython name) now supporting kernels of different languages (including C++ and Fortran).
Are an excellent way to register and report your progresses, together with a versioning control system, since it basically guarantees [3 of the 5 Rs](#a-good-scientific-program).

### Modern IDE

You can use vim or emacs and live happily forever (especially emacs is very complete). Or even more basic, you can use a notepad editor, like **gedit** and never go beyond the syntax highlighting. There are however modern (which doesn't mean better) integrated development environments (IDEs) around and would be wise to check it out, to be sure that your are using the best tool you can afford.

These modern editors are much more than a notebook under steroids, but include several useful features. From code folding and refactoring, to live visualization of notebooks. Most importantly, graphical debugging.

You should find the editor/IDE that keeps you more focused, and quicker (that usually means pressing the least number of buttons and looking up less time as possible a cheatsheet). If that means something old, or very simple, or very flashy and frowned upon in the serious-ish world of theoretical physics.
However, there are not that many editors that properly support Fortran and are multiplatform:

- **Eclipse** a huge editor, with a new initiative dedicated to [scientific computing](http://www.eclipse.org/downloads/packages/release/photon/rc2/eclipse-ide-scientific-computing). Is one of the few (and probably the best) development environment for parallel computing.
- **Geany** on the other side of the spectrum, slightly more than a notepad. Has one-button build & run, and proper folding of fortran code, which is pretty nice.
- **Atom** is the most "hackable" editor, that is is customizable and scriptable. Very fun to use and misuse.
- **Visual Studio Code** a pleasant discovery. Is minimal but modern and works well. Has several interesting features, including remote coding sessions. PS: despite being a Microsoft product, it is opensource and totally free to use.

### Debugger

Sooner or later you will have to learn how to debug a code, that it to understand what is wrong with it. Why it crashes or give unexpected results. The (extremely) old fashioned (but popular) way is to insert lines of writing variables. Is effective, but rarely as much as a well-setted debugger.

Debuggers do not need to printout anything particular and pre-setted, because they register the whole status of the machine. That is, you can see every variable defined in the code up to a _breaking point_ line.

Every _compiler_ has an associated debugger. [Gnu debugger](https://www.tutorialspoint.com/gnu_debugger) `gdb` is the most popular debugger for linux, associated to the `gcc` compiler (and works also in fortran). `lldb` is the "Apple version" associated to `clang` and works only for C/C++.

These debuggers can be used from terminal, but give their best in a proper IDE since is possible to see the machine status at a glance, and inserting breaking points directly in the editor.

Other than debuggers there are profilers and analysers. Profilers run your code taking notes on the execution time in each subroutine. Code analysers, analyses your code (ether at runtime or through the source code) to find out potential problems.

Other notable debuggers and analysis tools:

- [gprof](https://sourceware.org/binutils/docs/gprof/): a basic profiler you should learn to use.
- [vampir](www.vampir.eu): profiler for parallel calculations
- [valgrind](http://valgrind.org): a very complete debugger and analysis tool. Especially proficient to analyse memory and find memory leaks.
- [sonarqube](https://www.sonarqube.org): a professional and proprietary tool, now industry standard.

## Other resources

- [Joel test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/)
- [Competency Matrix](http://sijinjoseph.com/programmer-competency-matrix/)
- Gamified Learning: [Hackerrank](https://www.hackerrank.com), [Code Academy](https://www.codecademy.com), [Enki](https://www.enki.com).
