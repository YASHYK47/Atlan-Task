# Atlan-Backend-Internship-Task

Atlan Collect﻿ is a data collection platform that is being used by customers in 50+ countries in more than 200 organizations. Its features include team management, multilingual forms, and offline data collection. Our customers use Atlan Collect to power their most critical activities—from governments delivering vaccines to small business owners managing their daily inventory, to an international zoo monitoring a rare wildlife species.

Challenge - 
Atlan Collect has a variety of long-running tasks that require time and resources on the servers. As it stands now, once we have triggered off a long-running task, there is no way to tap into it and pause/stop/terminate the task, upon realizing that an erroneous request went through from one of the clients (mostly web or pipeline).

Solution -
I implemented this application through which the user can now stop the long-running task at any given point in time, and can choose to resume or terminate it. This will ensure that the resources like compute/memory/storage/time are used efficiently at our end, and do not go into processing tasks that have already been stopped (and then to roll back the work done post the stop-action).

Requirements :- docker and docker-compose 
              
The solution is packed in a docker image so to start the application use the following command :-
-                  sudo docker-compose up -d --build
-                  chmod +x run
-                  ./run
The API documentation of all the endpoints is present within the application in the form of a pdf.
