# The Gentoo Experiment
_22/05/2024_

Rambling about Linux instead of revising for finals lets go.

## Why try Gentoo?


### Shilling for Arch 

So I'm a Linux user. In fact I use Arch<sub>btw<sub>.

![Average arch user](assets/arch_user.png)

_Photo of me from ~2022_

I've been using Linux for ~3 years. I started in 2020. Left it for Windows in 2022 then came back in 2023. But throughout all those years I've always been on Arch since it was my first distro and for the most part I have no problems with Arch. In fact its been the best distro for me.

Reasons I use Arch
- Telling people that I use Arch.
- Installing a package is as easy as searching "\[package name\] arch" on Google. I don't need to install PPAs and read articles just to install Python on my machine (looking at you Ubuntu).
- I like a minimal system.
- The AUR has pretty much every piece of software I want.
- Telling people that I use Arch.
- Arch's install and maintenance passively taught me more about computers work.
- Sentimental attachment to my first distro.
- cool logo.

- Telling people that I use Arch.


### Why I want to try Gentoo

While my experience with Arch has been good there are some things I don't like. 

Reasons I don't like Arch
- Arch constantly wants to be up to date. Like you could probably run sudo pacman -Syu everyday and you will be getting new packages. I never used Arch because I like bleeding edge software and honestly I value stability over new features.
- Sometimes things will just stop working. Like the other day Spotify stopped working and I had to go on a side-quest to fix it. Sometimes those quests are fun and you learn something new about Linux but other days it's pretty much a chore. 

- I don't have any friends left because I kept telling them I use Arch.

That first point is a big one. For the most part I don't really mind using the most up to date software since it rarely causes problems; however, sometimes I need to keep a version of specific software since it has some annoying bug. 

This is ok I just downgrade the package but the problem is that Arch still wants to constantly update. 

![bad arch meme](assets/meme.png)

_ngl these cookie-cutter meme formats kind of suck but I'm too lazy to make my own in pinta_

So holding onto those old packages while Arch powers forward can eventually cause problems when new libraries/dependencies don't work with the older software for whatever reason.

This issue is not particularly annoying but its happened to me more times then I'd like I wanted to see what other distros had to offer. 

Debian and Mint are off the table since I don't like APT so I just thought to go 1 complexity level higher to Gentoo. That's it. 

I liked the idea of only installing what was needed such as the ability to remove any bluetooth or any other unecessary features through USE flags. 

Much like how using Arch passively taught me about the deeper workings of Linux systems and computers in general. I was hoping that Gentoo could offer an even deeper experience since Gentoo is a source-based distro.

I looked at Gentoo's granularity as giving me the choice to decide which packages I kept the same and which I'd like the latest versions of. 

Also the idea of compiling software specifically for your CPU alongside running a stripped down kernel optimised for your hardware sounded appealing. I understand any "snappiness" is  placebo but something about it scratched my brain in a certain way.

![Hole](assets/hole.png)

_This kind of explains it hopefully_

ok ok justifications over let's talk about using Gentoo.

## Using Gentoo

### The Installation

I'll keep this section brief since honestly installing Gentoo wasn't that hard. Coming from Arch, the installation was only marginally more difficult since it was a new distro. Granted my first system did fail to boot because I tried compiling and using a minimal kernel that was a little too minimal, but after installing a distkernel I had a working system. 

<img src="assets/gentoo.jpg" alt="Base Gentoo install" width="400">

Learning portage was also not too difficult. I quickly learned how to install, remove packages and install the binary version of packages. I even learned about unmasking certain unstable packages I needed. 
Que installing Hyprland and I had pretty much my entire setup in about ~2 hours. 

<img src="assets/gentoo_hyprland.jpg" alt="Hyprland Gentoo install" width="400">

At this time my future with Gentoo was looking bright and I was really considering changing my daily driver.

### Going Downhill

Initally, I liked the novelty of compiling all my packages from source. I even compiled Firefox from source with all the fun USE flags. But eventually a couple days into using Gentoo there came a problem. Now I didn't mind the extra time spent compiling my packages however I noticed that occasionally, some packages would recompile their dependencies. Usually this was ok since it just extended my installation time by a few minutes. But everything came to ahead with this one package.

ncdu

This one command I wanted to install to check my disk usage was the reason I stopped using Gentoo (that and accidentally uninstalling my kernel).

Trying to install ncdu pulled Rust, LLVM and Zig as part of its dependencies and it was going to compile all of them. 

I tried as many things I could. Installing using the --getbinpkg flag trying to install the dedicated ncdu-bin package but both methods still pulled the dependencies. Eventually I gave in and let it compile. That installation took 2 HOURS. 2 HOURS. I went to lunch and came back and it was still compiling. 

After the ncdu incident, I still gave Gentoo a shot but I was a bit uneasy about Gentoo. Another thing I didn't like about Gentoo was the lack of an easy to use AUR. While community ebuilds (pretty much MAKEPKGs for Gentoo from what I gather) do exist, the process of adding repository and potentially going through the umasking process was a bit too involved as someone who usually used AUR helpers like yay or pacaur. 

A few days later it was the 15th of May. The 15th of each month is when I update all my computers and servers. This Gentoo box was no exception so I ran the command to update the system. Something that never occurred to me until now was that updating Gentoo would mean recompiling everything. Considering how long it took to install ncdu, recompiling everything was too much. 

I gave Gentoo one last shot and left my computer on overnight to update. In the morning, I ran sudo emerge --depclean and ended up deleting my own kernel basically bricking my own system.

_RIP john@gentoo April 2024 - May 2024 taken far too soon_

I know that I could have booted the arch iso, chrooted into the system and reinstalled the kernel but at this point I felt like I could end my Gentoo experiment. 

## The Outcome

The people who use Gentoo are a very certain type of person. I can't really say what type but I know its definitely not me. I'm sure that if I put in the hours to really learn Gentoo I can get a solid setup with all my USE FLAGS, MAKEOPTS and everything else dialed in but frankly I could have probably used that time to learn how to better manage my Arch system. 

Gentoo is a huge time commitment not only in the installation but in its maintenance even more so than Arch. Although Gentoo has been rolling out a binary system, it will always be a source-based distro and thus each package will on average take longer than a binary.

That being said I understand how useful Gentoo can be particuarly in embedded space. Gentoo is the only Linux distro to my knowledge that provides images for MIPs, RISCv and many other architectures. Perhaps in a later project if I need some really light version of Linux I'll break Gentoo back out of the box for it.

For now though I'll still be using Arch. 