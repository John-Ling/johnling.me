---
title: "1 Year of Hyprland"
date: "2024-12-22"
---

About a year ago, I switched from using Windows back to Linux. In the past, I had used KDE plasma with Krohnkite for tiling as my workflow. However NVIDIA's X11 drivers and Plasma were not playing well at all.

Now I'm not sure about technical details nor do I really care about them but my experience with KDE was littered with stutters so bad that I could barely install my applications let alone do actual work.

On r/unixporn this one window manager, Hyprland, was making the rounds on the front page. If you scraped all the posts from the subreddit this year the distribution would have ended up something like this:

- 20%: I3 gaps
- 15%: KDE Plasma
- 5%: DWM
- 5%: cool sounding name + wm
- 55%: Arch Linux Hyprland with blurred terminal + rounded corners ( I swear most of them look the same although pot calling the kettle black mine's not very unique either)

I'm not kidding when I say that I went to reddit and the first thing I see when sorting by hot is 5 Hyprland setups directly next to each other.

## You
<img src="/images/blog/1-Year-of-Hyprland/image-8.png" width="400">

## can't
<img src="/images/blog/1-Year-of-Hyprland/image-9.png" width="400">

## make
<img src="/images/blog/1-Year-of-Hyprland/image-10.png" width="400">

## this
<img src="/images/blog/1-Year-of-Hyprland/image-11.png" width="400">

## up


While the lack of rice variety deeply upset me as an Asian I knew that Hyprland must have been doing something right to attract so many users.

Being a WM vagrant searching for a new workflow, I decided to give Hyprland a shot. Back in October 2023.

![My desktop](/images/blog/1-Year-of-Hyprland/desktop.png)
_My first Hyprland desktop_

Since then I've continued to use Hyprland throughout my first year of University. As we approach the end of this year, I want to write about my experience so far.

## The Good

### So Pretty!

Hyprland calls itself the "tiling compositor with the looks" and it definitely takes that statement seriously. Just take on look at r/unixporn or the Hyprland [Hall of Fame](https://hyprland.org/hall_of_fame/).

![alt text](/images/blog/1-Year-of-Hyprland/image-3.png)

_Really nice setup I found on Reddit after literally 20 seconds of browsing_

![alt text](/images/blog/1-Year-of-Hyprland/image-5.png)

_My own setup. Definitely not as nice but decent looking_

While every window manager can look as good or as bad the user decides, Hyprland includes little touches that make putting together a stylish desktop incredibly easy. Things like blur, border colour gradient and rounded corners are a cakewalk to set up. Even though I personally don't use them, as evidenced by Reddit, many people do.

Although these features are definitely possible in other WMs like I3 via things like Picom, it requires the user's effort to set up and configure. While that may appeal to a certain group of users for many users who consider things like blur and rounded corners basic feature, having them easily accessible means you can skip setting them up and jump straight to customising more the unique attributes.

**TLDR**: Hyprland allows you to put fairly minimal effort into making a good looking desktop.

### Animations

For me, one the biggest appeals of Hyprland has been the attention placed on including animations out of the box along with their granular customisation.

I use virtual desktops (workspaces in Hyprland) and animations when switching between them are incredibly important to me. The lack of virtual desktop animations on Windows 11 when it first came out was one of the reasons I never upgraded.

As someone used to the sliding animations offered by KDE, the lack of them out of the box for other window managers such as I3 was something that deterred me from switching to them.

While it was possible through things like Picom to get some animations working, I never figured out how to get animations for workspace switching up. In fact, looking online for answers I just found Hyprland recommendations instead.

![alt text](/images/blog/1-Year-of-Hyprland/image-1.png)

_"Problem with Picom? Just use Hyprland!"_

Conversely, workspace switching animations are enabled from the start in Hyprland. A welcome addition indeed. In fact, nearly every action in Hyprland from switching workspaces to moving windows between monitors and opening and closing windows had a nice animation out of the box.

Moreover, Hyprland goes a step further by making custom Bezier curves incredibly easy to set up.

I was really surprised to see this as an option. It was a really nice touch that I appreciate. I found that personally the default animation to switch between workspaces is a bit too "floaty". I prefer a snappier feel so I created my own bezier curve and set the animation accordingly.

While I'm sure that Picom supports custom Bezier curves, Hyprland makes it easy even for a dunce like me.

**TLDR**: Hyprland pairs great animations with nearly every action which makes the user experience much better imo. Don't like the stock animations? Create your own Bezier curves and have it your way™.


### Touchpad Gestures


If you've ever installed Linux in your laptop, then you're probably familiar with the lack of gestures out of the box. While things like 2 finger scroll are possible (though pretty poorly implemented) on X11, gestures I grew accustomed to on Windows such as kinetic scrolling or pinch to zoom (the good kind not the one that just increases zoom level to 110% 120% etc) required software like libinput-gestures or Fusuma.


For the longest time since getting my Thinkpad T15, I never installed Linux on it since even when using the aforementioned libinput-gestures or Fusuma, I could never get the gestures feeling as good as Windows.


When I tried Hyprland on my T420, however, I was pleasantly surprised to see kinetic scrolling and pinch to zoom was already set up and felt pretty nice to use.


I don't know what kind of black magic Vaxry (Hyprland's creator) performed to get this to work but it was enough to get me to drop everything I was doing (not the T420 although that thing would probably survive being run over) and put Hyprland onto my laptop.


**TLDR**: Touchpads suck on Linux but Vaxry cooked and made them good on Hyprland.


### Ease of Configuration


Hyprland's configuration file is very easy to use and I found myself being able to tweak Hyprland very quickly. The Hyprland wiki was really easy to follow and nearly any problem I had could be fixed with a visit to it.


Hyprland also comes with a fantastic program called Hyprctl which allows you to programmatically issue commands such as moving windows or switching workspaces. It makes scripts such as one I use to simulate windows-like virtual desktops in Hyprland possible and I've used it for many other bash programs on my system.


**TLDR**: Hyprland config easy. Hyprctl good.


### The Hypr Eco System


Window Managers pride themselves on being minimal and free of bloat.
Don't get me wrong I enjoy keeping my system light and responsive. However sometimes it feels like the "bloat", they cut are just fundamental features most of us need such as screenshots, wallpaper management, locking and putting my laptop to sleep when idle.


To address this, over time Hyprland has amassed a suite of utilities to handle these things such as Hyprlock, Hyprpaper and Hypridle.


Again, although you can definitely install independent programs from Github to handle these things and I could have given a good college try at cobbling one together myself, having tools specifically designed for Hyprland just guarantees compatibility.


**TLDR**: Hyprland uses its own software for basic things like screen locking, wallpaper management and screenshots. Very good because I'm too lazy to find that software myself.


## The Bad

Hyprland has been fantastic experience. However I'd be lying if I said that my experience was completely flawless.

### NVIDIA

On my main desktop computer, I have an NVIDIA card. Although it definitely works much better on Wayland compared to X11 with KDE, support is not perfect and I've definitely encountered my fair share of issues.

For me at least, gaming on Hyprland has been a mixed bag. Even though most of my games run natively on Linux, the combination of Wayland and NVIDIA has resulted in some weird problems.


While stock Minecraft plays fine under Hyprland, trying to use shaders resulted in weird artefacts resulting in me to downgrade my drivers to version 535. This worked for a bit until every other program started to break since I was holding onto this particular driver for Minecraft.


Other games like Terraria seemed to have weird performance and stuttering issues that I couldn't for the life of me fix no matter how many fixes like gamemode I threw at it.


Although compatibility with Windows games through software like proton definitely improves Linux's capability for gaming, I've had enough problems on Hyprland to just move all my games over to my Windows install.


It should also be noted that NVIDIA is not **officially** supported by Hyprland as stated by the wiki.


![alt text](/images/blog/1-Year-of-Hyprland/image-2.png)


While I personally haven't had many problems beyond gaming performance, others have. If you have an NVIDIA GPU keep that in mind before making the switch.

### Distro Compatability

Many Linux users use Debian based distros such as Ubuntu, Mint, Debian (of course) or PopOS. While I don't have much a problem with any of these distros, it's mentioned in the [wiki](https://wiki.hyprland.org/Getting-Started/Installation/) that **Debian based distros may not be able to run Hyprland**. 

"since Hyprland is extremely bleeding-edge, distros like Pop!_ OS, Ubuntu, etc. might have major issues running Hyprland."

While it is it technically possible to run Hyprland on Debian based systems and you'll find no shortage of success stories online, getting it to work and maintaining such a setup will likely be more difficult compared to using a more supported distro.

As far as supported distros go, Hyprland is often paired with Arch Linux. However if the learning curve is too steep, you can also run it with Arch's various derivatives such as Endeavor OS or Manjaro.


Fedora has also added Hyprland to its package repositories so Fedora is also a viable alternative.

Beyond Fedora and Arch's derivatives you can run Hyprland on Gentoo and NixOS although those distros will have an even steeper learning curve (I know that for sure with Gentoo).

**TLDR**: If you use Ubuntu, Debian, Mint, PopOS or the like, you'll likely have to switch to using another distro for Hyprland such as Arch (or EndeavorOS), Fedora, Nix or OpenSUSE. If you don't want to learn another distro consider another WM.

### Configuration Time

Now if you just want a desktop that works you can just head over to the [Hyprdots](https://github.com/prasanthrangan/hyprdots) repo and download the setup script there.


However if you want to make your desktop a bit more unique you'll need to put some time in.


While Hyprland offers a very easy way to configure your desktop, like all Linux desktops getting everything set up will take a bit of time. As mentioned earlier, most window managers keep things incredibly minimal meaning things like screenshot tools and idle managers will need to be installed separately.


While Hyprland does include most of these features through the Hypr suite, some quality-of-life things I wanted such as an on screen display for audio changes I had to look on reddit to find. This isn't really difficult just something that will take time.


Furthermore, many common apps you'll install for Hyprland such as waybar if you want a menubar will have their own configuration file that you'll need to make (or just steal someone else's and tweak like I did).


When I first started using Hyprland, I was working in an internship during the day which left me with not too much time to spend on Hyprland. It took me ~2 weeks to get everything up and running how I wanted it to, however if I wasn't working during the time, I'm sure it would have been much faster.


**TLDR**: If you want a nice looking desktop you'll need to put a bit of time in to configure it. How much time you put in is up to you.

### Weird Quirks

While those aforementioned issues make up most of the issues I've experienced with Hyprland, there are a few minor issues that while they definitely don't ruin the experience they are minor annoyances.


- Sometimes my file manager Dolphin will create a prompt asking what software to open a file when I double click. The only problem is that the menu it offers is completely empty. I don't why but running `XDG_MENU_PREFIX=arch- kbuildsycoca6` fixes the problem.
- Some popups in apps are treated as dedicated tiled windows rather than floating windows, resulting in all my other applications being squashed to fit them. The fix is to get either the class or title of the popup via `hyprctl clients` then add a rule to the config to float them.
- I use a [shell script](https://github.com/John-Ling/dotfiles/blob/main/laptop/bin/switch_desktops.sh) to emulate virtual desktops like the ones on Windows. For some reason this script breaks sometimes resulting in my workspaces going out of sync forcing me to restart my computer. This is likely less of a Hyprland
issue and more a "me bad at bash scripting" issue.
- When using my screenshot tool Grimblast, there is the weird issue of my cursor appearing in the screenshot when I don't want it to. I've found that ths fix mainly involves setting the "NO_HARDWARE_CURSORS" variable to 1 or 0 in the config file.
- Early on when using Hyprland, there was an issue where after switching virtual desktops, I wasn't able to switch focus between my monitors via keybind. I modified the config file to focus both monitors everytime I switched, fixing the issue.

```
bind = Alt, O, exec, hyprctl dispatch focusmonitor eDP-1 && hyprctl dispatch focusmonitor HDMI-A-2
bind = Alt, I, exec, hyprctl dispatch focusmonitor HDMI-A-2 && hyprctl dispatch focusmonitor eDP-1
```

_Part of my Hyprland config file_

## The <del>Ugly</del>

Hyprland is very pretty :)

## Summary

Overall my experience with Hyprland has been really good. While I can't say that the experience has been perfect, the majority of my issues have come from general problems with Arch Linux, Wayland or NVIDIA.


**TLDR**:
Pros:
- Amazing animations with ability to set custom bezier curves
- Incredibly easy to configure and put together a cool looking desktop
- Out-of-the-box support for touchpad gestures on laptops
- Hypr suite of software provides basic functionality and a good starting point


Cons:
- NVIDIA may have problems and is its own issue. Your mileage may vary.
- Be prepared to put a bit of time into setting up your system how you want
- Debian based distros no supported (at least officially)
- Hyprland will have weird quirks you'll either have to live with or try figure out a way to fix.


## Should I Try Hyprland?

yea
