---
title: "Nuclear physics"
date: 2018-05-06T17:12:41+02:00
draft: false
tags: ["Physics"]
categories: ["Nuclear Physics"]
background: "/img/partitore.jpg"
---

In many-body physical theory the description can go from the definition of an interaction between single components to the structure of the system. What makes a whole and separates the components from the aggregate? What are emergent properties, such as collective rigidity so familiar in the world around us, coming from?

A single subatomic particle is a fascinating, but relatively still object. I study how the subatomic particles, neutron and protons, come together in ensembles to form nuclei at the core of everything around us. Investigating the individual particles is particle physics, investigating the grouping of particles is nuclear physics.

<div style="text-align:center;">
<iframe width="75%" height="665" src="/img/masstable.html" frameborder="0" allowfullscreen></iframe>
<figcaption class="image-caption">Masses of all nuclides included in the Atomic Mass Evaluation of the corresponding year</figcaption>
</div>

Nuclear physics is especially difficult since as much as 300 subatomic particles come -and are bound- together by a force we don't completely understand, the nuclear strong force, following the complicated rules of quantum mechanics. Thus, approximations must be employed to make heads of tails of its quantum behaviour, even in supercomputers simulations.

Nuclear reactions happen when a projectile proton, neutron or nucleus impinges on another nucleus. These processes are at the basis of the study of the nucleus, because this is practically the only way we can access it: accelerators are used and built all around the world to penetrate the cloud of electrons around the nucleus forming the atom. In these way, we can discover its secret and study ever more rich and complex systems. Moreover, nuclear reactions occur naturally in every star (everything in the night sky was, at some point, a nuclear process), and artificially in power plants and medical devices. Therefore, understanding nuclear reactions imply better understanding the stars, nuclear medicine, a variety of nuclear application, and of course the nucleus itself.

In particular, there is an important question yet to be answered: where the nuclei that form everything come from? There is a nuclear phenomenon, involving the capture of neutrons in a rapid fashion, that generates most of the elements heavier than iron. These are most metals on Earth, including gold. The problem is that since there is no complete theory about neutron capture, it is very difficult to do simulation involving them. Consequently, the astrophysical site of this rapid-process (r-process) is undetermined and scientists are still discussing if gold comes from supernovae or neutron star collisions.

<div style="width: 300px; float: left; margin: 10px"> 
<img src="/img/SelfEnergy.png" alt="Self Energy diagrams" /> 
</div>

My current personal contribution to this scientific research, mainly consist in joining the study of nuclear structure (how the nucleus is) with nuclear reactions (the dynamical processes that happens when a nucleus or a particle impinges on a nucleus). The overarching aim is to build the [theory of nucleus bottom-up](https://arxiv.org/abs/1612.01478), from the components to the nuclear reactions</a>. This is extremely difficult due to the aforementioned problems in our understanding of the nuclear force that binds together the nucleus, and the computing power required to simulate the quantum behaviour of many particles.

The idea behind this project lies in studying projectile and target separately and effectively. I will calculate the properties of some “key” nuclei with the best microscopic description of the nuclear force and the nuclear dynamics that we know. Then I will extract the relevant information out of this rich description and create an effective interaction which can reproduce the same information with a way lighter calculation. This new effective interaction can be applied on all nuclei, and will be a good approximation of the original microscopic nuclear force.

After having a good description of the structure of the nucleus, one can consider what happens when a projectile impinges on it. The interaction between nucleus and projectile is called optical potential, because it models how the projectile can either be absorbed or deflected, as it happens to a ray of light in a camera lens.

Using this two tools one can define a framework to go from first principle nuclear structure to reactions in every nucleus, having the best of both worlds: a 'lightweight' and precise theory of nuclear reactions to understand the nucleus inside us and the sky above us.

Other present and past studies regard the nature of nuclear superfluidity, and [nuclear interactions](https://arxiv.org/abs/1611.09311). Making use of statistical methods and, lately, neural networks (cf. Figure).

<div style="text-align:center;">
<iframe width="75%" height="640px" src="/img/chart_relu.html" frameborder="0" allowfullscreen></iframe>
<figcaption class="image-caption">Residual errors on nuclear masses calculated with a ReLU trained shallow neural network</figcaption>
</div>

Nuclear superfluidity is given by coupling of neutrons and protons in special states where one particle [moves in opposite time evolution respect to the other](https://arxiv.org/abs/1705.11083). The origin of this effect is given both by the nuclear strong force and by complicated correlations [arising in the nuclear medium](https://arxiv.org/abs/1404.7365). These same correlations [drastically modify the ordinate structure](https://arxiv.org/abs/1504.05335) that is often supposed in nuclear calculations. This impact [nuclear reactions](https://arxiv.org/abs/1404.1317) and other [observables related to the nuclei, such as rotational inertia](https://arxiv.org/abs/1107.0251).

### My main collaborators (in fully randomised order) are
- **University of Surrey:**
C. Barbieri, F. Raimondi
- **University of Lyon:**
K. Bennaceur
- **University of Milan and INFN:**
R. A. Broglia, E. Vigezzi
- **University of York:**
J. Dobaczewski, A. Pastore
- **University of Seville:**
F. Barranco
- **University of Darmstadt:**
G. Martinez-Pinedo
- **TRIUMF Canadian National Laboratory:**
P. Navratil
