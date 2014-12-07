OSM
===

Open Source Muzak

Initial work done in Logic Pro X, and includes the use of several proprietary plugins to see how well they translate to other DAW's.

## Goals

- Choose a License (Apache / MIT / GPL) [https://tldrlegal.com/]

- Understand the structure of a project and find commonalities between popular DAW's (Logic, Pro Tools, Cubase, Sonar)
- Possibly create a "bootstrap" project configuration for aforementioned DAW's so that they can be easily/automatically exported to a reusable format for others to tinker with.
- Explore the possiblities of re-using plugins or creating some sort of a plugin package manager.  Does this track use Native Instruments Guitar Rig 5?  Run "apt-get my_plugin".
- Understand how Git treats audio files.  Are conflicts a regular occurance?  Are diff's even possible?
- Figure out what MIDI libraries exist in each language and how easy it will be to gather data

### Set Configs
Copy config.js.sample to config.js

### Install Dependencies
npm install

### Run Server / Build Static Dependencies
gulp
