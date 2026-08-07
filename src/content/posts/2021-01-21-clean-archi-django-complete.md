---
title: "How to start clean architecture with Django"
description: "Where we eexpose the essence on how you can start to use clean architecture when dealing with Django framework"
date: 2021-01-21
tags: ["craft", "clean architecture", "django", "python"]
locale: en-gb
published: false
---
## TODO

- dessins
- code examples

Today, I was asked about what I consider a clean architecture when using Django. 
I thought it was a fantastic question, particularly if I try to make a synthetic yet useful answer.
So let's try

## What are we talking about anyway ?

[Django](https://www.djangoproject.com/) is popular web framework built with Python.
Like Rails and some others, it was built in the mid 2000s to allow for rapid development, and it does a real good job for that.
It comes with a HTTP layer, a templating engine and an ORM. 
It enforces a kind Model - View - Template architecture, the model layer being the starting point of almost everything.
It is intended to be both the data persistence layer and the domain model - with the "fat model" approach.

Models are then used both in views - and forms API - and in templates.
This often results in domain knowledge being scattered through models, forms, views and templates.
In the better case, with a lot of discipline, you can at least have all your domain knowledge in your models, but you still have a high coupling between data models and domain models.
This results usually in long running tests, which makes it hard to benefit from a short feedback loop if you want to use TDD.

So, how can we go beyond these problems ?

## Clean architecture to the rescue

Clean architecture, and its close parent hexagonal architecture, are architectural styles whose goals are to protect the core domain model from couplings to the external world.


The idea is that, to built lasting, efficient and easy to change software, we must strictly protect the core domain model.
It should not depend on anything coming from the external world, be it http request, data persistence system, third-party API.

Moreover, it should be easy to change one of these input / output system, or add one.
Need to change the database ?
Need to build a CLI ?
You should just have to respect some contract and plug in to the appropriate port.

Without going into much detail, the basic, vital idea is that dependency should always go from the outside to the inside: exterior element can depend on inner element, but never the other way.

HTTP controller depends on the domain.
A persistence system depends on the domain.

To do that, you can easily start with two patterns:
- dependency injection, to let the domain model handle it's interactions to external systems it controls
- function with simple API on the domain model to be called by external systems that drives the application

## How can it be used with Django ?

The principal problem with Django is the coupling between the data model and the domain model.
They are the same!
A secondary, yet important, problem is the scatter use of data models, with uncontrolled calls to the persistence, through the views and templates.

Without going on a full blown approach like in the excellent [Software Architecture Patterns with Python book](), you can start with the following simplified approach.


### Domain model

Start by creating a real domain model, with entities and value types (value objects) to replace the data model.

You can use plain and simple Python objects to start.
I highly recommend that you use [Pydantic]() coupled to [dataclasses]() and [type hints]().
You'll be able to define typed, declarative models with basic type validation, with a neat and comprenhensive code.

This model must carry all the behavior.
You can migrate behavior properties and functions from your Django models.


Persistence will be handled by the domain model through a repository pattern.
You define an interface that repository implementations must follows in the domain: get an entity, save, and whatever you need.
In Python, you can use [abstract base classes]() or [protocol]() to have some interface kind.
Concrete repository instances will be provided through dependency injection.


You won't use directly domain models directly from the views.
Usually, creating consistent instances will implies several steps, with interactions with persistance system.
To handle that, you will have an application services layer (or use cases layer).
It can be plain functions.
Try to have only primitive or very simple types in the functions signatures, to avoid the detailed domain knowledge to leak in the view.
All these should be located in the domain model.
These functions will handle interaction with the persistance system through a concrete instance of repository.

With that, you already have:
- a really short feedback loop to TDD it, because you will use an in-memory repository implementation
- interfaces with primitive to major use cases for the views to call


### ORM repository implementation

For production, you'll use a concrete implementation of the repository based on the ORM.
With a legacy system, you can even stick to existing models quite simply.

Define (Django) data models as is best fitted for your need, and implements the repository methods.
Integration tests will give you confidence that it is well working.

### The view layer

There is not much change needed in the view layer.
You should  pay attention the following points.

Views should be the dumbest possible: doing some http stuff, calling a service from the application service, returns something.
Views are responsible for providing a repository implementation to the application service.
Forms are a practical way to handle form data validation, and can be used to call application service too.
Templates should be the dumbest of all.
Provides only in-memory, flattest possible data structure (sometimes called view model).
Manage only display logic in templates.

## Enjoy and go further

With this approach, you can quickly have great improvements on several matters.

Your domain knowledge is expressed in a pure Python, semantic domain model, located in a single place.

Use cases are expressed as application service functions.

All the domain model can be tested with a fast in-memory repository implementation.

Interactions with persistance system is located in one place - the repository - making performance and optimisations easier.

Views are back to their role: handling http interactions.
Forms are back to their role: http data validations.
Templates are back to their role: displaying.

Even with a complicated, legacy system, you can incrementally use this starting patterns to improve.

You can go much further on that path, but that's a starting point.
