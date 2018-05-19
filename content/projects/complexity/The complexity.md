---
title: "The complexity"
date: 2018-05-06T17:12:41+02:00
draft: false
subtitle: "I'm a cool subtitle!"
tags: ["complexity", "math"]
categories: ["Complexity"]
background: "/assets/img/placeholders/pic3.jpg"
---
# This is a cool title! ya know?
## This is a cool SUBtitle! ya know?
### This is a cool SUBSUBtitle! ya know?
#### This is a cool SUBSUBSUBtitle! ya know?
##### This is a cool SUBSUBSUBSUBtitle! ya know?
## And this is a image:
![Lalacaption](https://techcrunch.com/wp-content/uploads/2018/02/spacex-falcon-heavy-181.jpg?w=730&crop=1)

Sunt ex nostrud ea minim amet ipsum.  
Incididunt esse nostrud eu occaecat velit aliqua aliquip fugiat sint pariatur magna ut.  
Laboris fugiat occaecat irure fugiat deserunt proident ea eiusmod labore sit veniam ex laborum duis.
Minim Lorem nostrud in ipsum nulla.  
Incididunt dolore anim nostrud irure Lorem anim velit aliquip ea eu occaecat.  
{{< highlight python "linenos=table,hl_lines=8 15-17,linenostart=10" >}}

import sys
sys.path.append("eve")

from argparse import ArgumentParser
import os
import cv2
import logging

from eve.grabbers import CameraGrabber
from eve.isolators import FaceIsolator
from eve.manager import Eve
from eve.training import check_dir, save_unlabeled_data
from eve.t import curr_millis

# https://github.com/Hironsan/BossSensor/blob/master/camera_reader.py
# https://github.com/gagolucasm/Classify-Real-Time-Desktop
# https://realpython.com/blog/python/face-detection-in-python-using-a-webcam/

def draw_blobs( frame, blobs ):
    for b in blobs:
        cv2.rectangle( frame.data, (b.x, b.y), (b.x+b.w, b.y+b.h), (0, 255, 0), 2)
        cv2.putText( frame.data, b.estimation, (b.x,b.y-5), cv2.FONT_HERSHEY_TRIPLEX, 0.4, (0,255,0))

parser = ArgumentParser()
parser.add_argument("--data-path", dest="datapath", default='./evedata',help="Data path.", metavar="FOLDER")
parser.add_argument("--debug", dest="debug", action="store_true", default=False, help="Enable debug output.")
args = parser.parse_args()

fmt = '[%(asctime)s] %(levelname)s - %(message)s'

if args.debug:
    logging.basicConfig(level=logging.DEBUG, format=fmt)
else:
    logging.basicConfig(level=logging.INFO, format=fmt)

logging.info( "Eve v%s started." % Eve.VERSION )
logging.info( "Using datapath %s" % args.datapath )

check_dir(args.datapath)

cam = CameraGrabber(0)
w, h = cam.get_frame_dimensions()
isolators = [ FaceIsolator() ]

logging.info( "Capturing at %dx%d, press 'q' to quit." % ( w, h ) )

prev = 0

while True:
    now = curr_millis()
    frame = cam.get_frame()

    if frame is None:
        logging.warning("Error reading frame.")
        continue

    # Isolate blobs in the frame
    blobs = []
    for i in isolators:
        blobs += i.isolate(frame)

    # TODO: Remove overlapping blobs.
    # TODO: Use TensorFlow model to predict labels for blobs.

    # Put unknown blobs in the training queue
    if len(blobs):
        # dump samples every 200ms
        snow = curr_millis()
        since_last = snow - prev
        if since_last >= 200:
            prev = snow
            save_unlabeled_data( args.datapath, frame, blobs ) 

        draw_blobs( frame, blobs )

    end = curr_millis()
    taken = end - now
    fps = 1000.0 / taken

    cv2.putText(frame.data, "fps: %.2f" % fps, (520,460), cv2.FONT_HERSHEY_TRIPLEX, 0.5, (255,255,255))
    cv2.imshow("Eve", frame.data)

    if cv2.waitKey(1) & 0xFF == ord("q"):break
{{< / highlight >}}
Laboris nulla nisi amet fugiat ut sunt proident reprehenderit cillum incididunt non est consectetur.  
Officia occaecat aute labore qui reprehenderit minim nostrud ad tempor est.  
Proident duis exercitation nostrud aliqua consectetur est sint.  
Aliqua et dolor et exercitation laboris ea.  
Anim esse cillum qui occaecat Lorem ad incididunt amet est et.Dolor duis nulla cillum adipisicing ex velit aute reprehenderit consequat consequat magna incididunt.  
Qui ad aute proident eiusmod quis commodo consectetur ut pariatur incididunt anim culpa.  
Amet sit incididunt culpa cillum.  
Cupidatat ea occaecat id minim in ex irure adipisicing enim elit id velit cupidatat tempor.  
Laborum qui excepteur consectetur eiusmod incididunt sint duis.  
Ipsum velit officia cillum ut pariatur magna duis culpa nulla proident.  
Magna deserunt tempor reprehenderit mollit nostrud in.Officia nisi et exercitation consequat.  
Exercitation dolor aliqua esse occaecat dolore aliquip veniam ad.  
Ad consequat commodo id culpa cillum elit quis laborum duis cupidatat.  
Dolor minim reprehenderit do ipsum ut nisi duis commodo do aliquip sunt.  
Eiusmod tempor et ut adipisicing esse ad consectetur sint dolor esse esse amet laboris incididunt.Proident enim ad laboris pariatur officia sint et.  
Do tempor aliqua elit et ut ut sint laborum Lorem tempor sunt ea fugiat.  
Consequat non excepteur veniam eu dolore.  
Esse sint reprehenderit aliqua voluptate ullamco elit cillum magna.  
Ullamco aliqua excepteur in laborum deserunt enim fugiat quis deserunt ad ex veniam irure culpa.  
Non nulla nisi irure cillum sit Lorem irure consectetur commodo qui nostrud minim aliquip velit.Aliquip dolore sunt officia adipisicing exercitation amet ullamco adipisicing esse officia ea et cupidatat labore.  
Magna labore dolore sit exercitation magna.  
Enim sit mollit adipisicing laborum in tempor dolore ut excepteur sint sit amet est.  
Eiusmod et aliqua tempor reprehenderit nisi excepteur.  
Occaecat aute esse non exercitation nulla aliqua incididunt.Consequat dolore Lorem dolor sit excepteur nisi sit.  
Cillum veniam nostrud ad eu officia pariatur deserunt.  
Anim eu non non consectetur mollit.Cupidatat veniam culpa magna et anim mollit nulla.  
Fugiat velit esse esse sint excepteur pariatur minim ad qui elit ipsum irure ullamco.  
Id ut excepteur dolor sunt eiusmod.  
Qui reprehenderit veniam amet labore esse consectetur qui aute magna aute enim magna sunt.  
Labore laborum nostrud cupidatat culpa consequat veniam sit in.Irure ea et duis consectetur nostrud.  
Excepteur ullamco dolore aliquip id commodo officia tempor laborum.  
Aute sint incididunt elit est sint quis id anim irure pariatur.  
Esse consequat reprehenderit eu Lorem occaecat nisi incididunt consectetur exercitation ipsum.Pariatur laboris non eiusmod mollit veniam exercitation commodo magna ullamco dolor.  
Non consectetur incididunt ut ad dolore.  
Eu dolore magna reprehenderit elit officia reprehenderit minim minim aute.  
Aliquip exercitation sint laborum sint.  
Est qui amet culpa aliqua anim eu ea veniam labore anim et do sint nisi.  
Aute nostrud magna officia elit adipisicing officia nostrud et.  
Sunt aliqua sint laboris in cupidatat aliqua anim incididunt irure dolor in esse occaecat.Minim eiusmod mollit eiusmod Lorem laborum duis ipsum.  
Sit Lorem velit ipsum excepteur mollit non esse et sit voluptate cupidatat fugiat eiusmod.  
Enim fugiat dolore eiusmod ipsum laboris id laborum sint.  
Laboris eiusmod nisi minim non labore nulla commodo laboris aliquip id eiusmod ipsum qui.  
Dolor cupidatat laborum ullamco mollit dolore proident esse et sit.  
Anim incididunt et labore commodo dolor sint irure.Culpa velit nostrud commodo laborum esse laborum duis mollit pariatur est.  
Magna reprehenderit dolor irure commodo nulla.  
Pariatur non fugiat incididunt et aliqua.  
Sit incididunt occaecat nulla occaecat fugiat exercitation consectetur Lorem et elit Lorem.  
Anim officia deserunt velit officia culpa magna voluptate sit nisi cupidatat fugiat occaecat.Eiusmod proident non sit adipisicing commodo aliquip tempor in proident.  
Excepteur duis nostrud ea occaecat in laboris.  
Et velit duis anim mollit Lorem incididunt fugiat.  
Ut sit do qui irure tempor velit amet.  
Nostrud laboris cillum cillum id proident nulla.  
Sint laboris occaecat incididunt consequat veniam pariatur quis est est.Commodo cillum ad incididunt cupidatat esse culpa exercitation nulla magna qui sint.  
Do officia do proident esse cupidatat.  
In anim qui id non consectetur.Sit esse amet nulla dolor sunt Lorem officia.  
Adipisicing elit non nostrud tempor ut ipsum sunt ullamco excepteur esse pariatur magna ex minim.  
Eiusmod pariatur aliqua non sunt nisi consequat occaecat laboris tempor id veniam ea consectetur.  
Ad consequat fugiat do amet.  
Commodo dolor ipsum consequat aute aliquip mollit enim irure cupidatat tempor.  
Reprehenderit est labore pariatur ex excepteur.  
Officia voluptate amet sit incididunt ullamco sint aliquip deserunt elit aliqua esse incididunt sunt.