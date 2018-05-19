# SitoAndreaIdini
Personal website for @AndreaIdini - made with ❤ and Hugo  
Some hacks have been adopted during the ideation of this template, some of them will be written down here to give a general idea.  

# Adding a new project
## Generating the project file
To add a project all you need to do is to add a .md (markdown) file.  
There are 2 ways of adding a new project: creating the file manyally and via Hugo.  
The suggested way is to use Hugo, since it "initializes" the file.  
To add a new file (for example called "Black holes"), all you need to do is type  
```
hugo new "content/projects/physics/black holes.md"
```
This is the default content of the file:  
```
---
title: "Black Holes"
date: 2018-05-19T08:16:54+02:00
draft: true
# Link to a background image
background: "/assets/img/placeholders/pic27.jpg"
subtitle: "Sample subtitle"
---
```
If you want to create the file manually, you need to paste the above content in the file you created in order to have all the features you have when you you use Hugo.  
## Editing the variables
Hugo usees some variables for each project, to customize the page.  
(Look at the above section to understand what I refer to).  

| Variable name | Usage |
|---------------|-------|
| `title` | This is title of the article. If differs from the file name because the file name indicated the URL of the project, the `title` indicates the title of the article. |
| `date` | This is the date of publication of the article. If you create the article via the Hugo CLI, this value is setted to the time of generation of the file |
| `draft` | If the project is a draft, it will not be included when exporting the website. |
| `background` | This is the main background of the project. It can be both be a link (eg. `https://vgy.me/YQTFas.png`) or link to a local file (eg. `/assets/img/placeholders/pic27.jpg`) |
| `subtitle` | This is the subtitle of the article |

## Inserting external html files
Can can put an external HTML file in the blog post by inserting in the .md file pure HTML (The iframe tag in this case)

## Inserting code
To insert some code there's a syntax made exactly for that.
For example, for adding a python code, you need to write `{{< highlight python >}}` before the code and `{{< / highlight >}}` after.  
Fore infos can be found in the official [Hugo documentation page about syntax highlighting](https://gohugo.io/content-management/syntax-highlighting/)

```
{{< highlight python >}}
print("Hello world")
{{< / highlight >}}
```
You can also higlight some code with the `hl_lines` syntax, provide a starting line number and so on
```
{{< highlight python "linenos=table,hl_lines=3 5-7,linenostart=2" >}}
import time
import socket
import re
VUL=['CVE-2018-2628']
#remote ip changed to :127.0.0.1
PAYLOAD=['ACED000000078']
{{< / highlight >}}
```
You can find more info in the [Hugo documentation website](https://gohugo.io/documentation/)


# Structure
## Editing the Index page
### Editing the texts in the index page
The index of the website is located in the folder `themes/Idini/layouts/index.html` and it's just a mixture of the partials html files located in `themes/Idini/layouts/partials/index`  
Ideally (having a HTML-compatible editor, like [Visual Studio Code](https://code.visualstudio.com/)), to edit the texts it's enought to edit the "white" texts as shown in the image below:  
![](https://vgy.me/YQTFas.png)  

### Editing the animations
The website uses a JavaScript library called [Animate on scroll](https://github.com/michalsnik/aos) (AOS for the friens) to display some animations when the user scrolls the page.  
This JavaScript library is based on HTML attributes in the nodes.  
For example, the animation type and duration are determined respectively from the attributes `data-aos` and `data-aos-duration` (see the image below):  
![AOS attributes](https://vgy.me/cSvliU.png)  
  
#### Disclamer: this won't be a guide about the AOS library, so I'm just keeping it simple.
As you can see, not all the attributes are present in both the nodes (exept the `data-aos` attribute).  
That's because the `data-aos` attribute is the only one required to indicate to the library that the selected element should be animated.
The others attributes are called "advanced".  
Here you can find a list of the advanced attributes in ufficial readme file in the [AOS page](https://github.com/michalsnik/aos):  
  
| Attribute | Description | Example value | Default value |
|---------------------------|-------------|---------------|---------|
| *`data-aos-offset`* | Change offset to trigger animations sooner or later (px) | 200 | 120 |
| *`data-aos-duration`* | *Duration of animation (ms) | 600 | 400 |
| *`data-aos-easing`* | Choose timing function to ease elements in different ways | ease-in-sine | ease |
| *`data-aos-delay`* | Delay animation (ms) | 300 | 0 |
| *`data-aos-anchor`* | Anchor element, whose offset will be counted to trigger animation instead of actual elements offset | #selector | null |
| *`data-aos-anchor-placement`* | Anchor placement - which one position of element on the screen should trigger animation | top-center | top-bottom |
| *`data-aos-once`* | Choose wheter animation should fire once, or every time you scroll up/down to element | true | false |

So if you want to edit or change an animation, you just need to change the attribute.  

### Changing the "About me" picture
At the moment of downloading of the template, a simple placeholder (from [placeimg](https://placeimg.com)) image is used in the "About me" action:  
![About me ](https://vgy.me/tIYXkM.png)  
(The placeimg site is used also to add some loading time and permit to check the perloader animation) (*coff coff* It's a feature, not a bug *coff coff*)  
You can change the image by editing the `url` in the `background-image` prop in the `style` attribute in the about partial template (#KIS):
```
<div data-aos="flip-left" id="bio-main-img" class="img-responsive"
IN THIS  -->   style="background-image: url('https://placeimg.com/480/640/any');">
 </div>
```

### Changing the "Get in touch" icons
I used [Font Awesome](https://fontawesome.com/) to provide the icons to the website.  
In this moment the "Get in touch" section looks like that:  
![Get in touch icons](https://vgy.me/K0WNtS.png)  

The raccomended number of accounts to contact is 4, not less, so your audience can have multiple channels to talk with you.  
If you put less than 4 items, the CSS will fuck up (*coff coff* It's a feature, not a bug *coff coff*)  

To change the icon you need to search an image in the [Font Awesome Website](https://fontawesome.com/icons?d=gallery) by using the search function.  
Once you selected an icon, you just need to copy the code you find under the icon:  
![](https://vgy.me/bNG2rB.png)  
And paste it in the HTML row corresponding to the item you want to edit, for example in the below picture you can see a before and a after (note the code underlined in white):  
![](https://vgy.me/hFFQN6.png)


## Managing the blog  
By desing I did prefer to adopt the `uglyURLs` configuration of hugo.  
This flag indicated to use "ugly urls".  
Example:  

| | Without ugly urls | With ugly urls |
|-----|---------------------------|----------------------------------------|
| URL |`/projects/the-complexity/`| `/projects/complexity/the-complexity/` |

I did prefer this approach since it indicates the domain of the article.  
Unfortunately it causes a little problem: when you navigate in the folder, Hugo renders a white page.  
Since I wanted to indicate the domain of the article with the `category`, the workaroud is to redirect the user to the category.  
The way this can be accomplished is to create a static HTML file in the root of the folder  
Structure of the project to "work":

```
...
├───content
│   └───projects
│       │   _index.md
│       ├───complexity
│       │       The complexity.md
│       ├───physics
│       │       The nuclear physics.md
│       └───vision
│               The computer Vision.md
│
├───static
│   └───projects
│       ├───complexity
│       │       index.html
│       │
│       ├───physics
│       │       index.html
│       │
│       └───vision
│               index.html
...
```
In Hugo the static files are placed in the folder they are located, so we can trick it to work with a minimal effort.  

The `index.html` should just contain a meta tag to redirect the user to the category section, so a sample file would be this one:  
```
<meta http-equiv="refresh" content="0; url=../../category/categoryName" />
```
And the "categoryName" should be replaced with the actual category name given in the article.

## Adding static material
Static material can be added putting it in the `static` folder.  
When adding a new material related only to an article, my suggestion is to create a folder with the same name of the article and put the material (like an HTML file to display via an iframe) inside it, like shown below:  
```
├───content
│   └───projects
│       └───vision
│               The computer Vision.md
├───static
│   └───projects
│       └───vision
│           │   index.html
│           └───the-computer-vision     <-- Folder whith the same name ofthe article
│                   mass.html        <-- HTML file to show via iframe only in "the computer vision" article
```

## The 404 page
For the 404 page to be shown correctly, you need to set the webserver to set is as the default page.  
This configuration depends on the webserver you are using.  
Consult the reference to know how to accomplish the custom 404 page.  
