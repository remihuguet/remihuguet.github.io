---
title: "Clean architecture with Django"
description: "Where we draw a quick path to use clean architecture with Django framework"
date: 2021-01-15
tags: ["craft", "django", "python"]
locale: en-gb
published: true
---


❓Today, I was asked what's a clean architecture to me when using Django web framework
💡I found it was a very interesting question - not so easy to make a synthetic, yet useful answer.


✍️ I start to write something with the idea that it must be short, synthetic and introduce what is necessary to start clean architecture with Django.
🤦‍♂️ It is much more complicated than I thought
😅Good news is, I have some interesting content to finish in coming days.


📚 However, the main takeaways are:

1. Make a domain model with in pure Python
2. Make application services of the domain with functions. Only primitives args, inject repository here
3. Make a concrete repository implementation with Django ORM

5. Views handles http stuff and calls application service
6. Forms handles http data validation and calls application service
7. Templates handles display stuff. Be dumb in templates

You can apply it to legacy. It is a great starting point.

🚀 After that you can go much further in clean architecture and DDD with Django 