---
title: On Quiet Software
date: 2025-09-14
---

Most of the software I open in a given day is loud. It chimes, it badges, it
slides up little rectangles asking me to consider its feelings. It treats my
attention as a resource to be extracted, not a thing on loan from my life.

I have started to notice the small handful of programs that do the opposite.
They are *quiet*. They open without a tour, accept my input without comment,
and disappear when I am done with them. They tend to do one thing, do it
honestly, and stop.

## A short list of quiet things

- A text editor that has not changed its menus in eleven years.
- A read-later app that does not tell me what other people are reading.
- A calendar that, when I have no meetings, simply shows me an empty day.
- A drawing tool whose only chrome is the cursor.

None of these will make their authors rich. None are venture-funded. Most
will be quietly maintained by one or two people for a long time, and then,
one day, will not be.

> The best tools fade. The worst ones perform.

## What it asks of the maker

Building quiet software is, mostly, a matter of *not adding things*. Of
shipping the version with the empty homepage. Of refusing to put a number on
something just because a number could be put there.

It is harder than it sounds, because the loud version is always within
reach. There is always a notification you could send, a meter you could
display, a streak you could invent. The discipline is to leave that drawer
closed.

```js
// not this
function onIdle(user) {
    sendReminder(user);
    incrementStreakWarning(user);
    showOnboardingTip(user);
}

// this
function onIdle(_user) {
    // let them be.
}
```

## What it gives back

When the software is quiet, the work happens. The writing gets written, the
photo gets edited, the appointment gets kept. The tool was never the point;
the work was. Quiet software remembers this on your behalf.

I am trying, slowly, to make more things this way.
