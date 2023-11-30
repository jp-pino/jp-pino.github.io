---
extends: _layouts.post
section: content
title: Image Processing
date: 2019-08-18
description: Comments on paper from IEEE Transactions on Image Processing
cover_image: /assets/img/ieee-computer-vision.png
categories: [homework, robotic-vision]
---

### Panoramic Images
_Comments on [**"Real-Time Panoramic Image Generation and Motion Deblurring by Using Dynamics-Based Robotic Vision"**](https://ieeexplore.ieee.org/document/7362211) by Michael Duckjune Kim & Jun Ueda from ["IEEE/ASME Transactions on Mechatronics Vol. 21"](https://ieeexplore.ieee.org/xpl/tocresult.jsp?isnumber=7463574)_

Out of all the papers I've read for this assignment, this one is the most related to robotics. The method this paper proposes for panoramic image stitching differs from the traditional methods in that the pictures are taken as the camera moves, instead of waiting to capture the image before the camera starts moving. The following diagram from the paper illustrates this:

>![alt text](/assets/img/ieee-panoramic-diagram.png)

> Timeline to create a panoramic image from VGA images. The “move” block represents the settling time for a point-to-point motion using the robotic vision system. The “image” block represent the time of image acquisition. The “de” block represents the computation time of image deblurring that was set to 16.5 ms based on the results from Section IV-D.

The proposed method is not only very time-efficient, but it also produces very good results. The actual implementation of this paper involves not only understanding of images and robotics, but interfacing between them too.


### Atmospheric Visibility Estimation
_Comments on [**"Relative CNN-RNN: Learning Relative Atmospheric Visibility From Images"**](https://ieeexplore.ieee.org/document/8412582) by Yang You & Cewu Lu from ["IEEE Transactions on Image Processing Vol. 28"](https://ieeexplore.ieee.org/xpl/tocresult.jsp?isnumber=8468142&punumber=83)_

Reading this paper, it becomes clear that image processing is a field that may have far-reaching impacts on our lives. This paper proposes a method for estimating relative visibility from images using a relative CNN-RNN model. According to the paper, this model combines a Convolutional Neural Networks with a Recursive Neural Network which allows it to analyze the images with seven different attention regions in the images. As the authors mention, this approach produces good results in atmospheric visibility estimation and if implemented in a large-scale setup (e.g. using geo-tagged images uploaded to the web), it becomes much more affordable than the expensive scientific equipment used in very sparse weather observatories. **_Image processing_** and **_Robotic Vision_**, are clearly fields that offer new and innovative solutions to everyday problems today. However, when combined with other fields such as Data Science and Machine Learning, the solutions they offer become something out of a sci-fi movie.


### Object Counting
_Comments on [**"Divide and Count: Generic Object Counting by Image Divisions"**](https://ieeexplore.ieee.org/document/8488575) by Tobias Stahl, Silvia L. Pintea & Jan C. van Gemert from ["IEEE Transactions on Image Processing Vol. 28"](https://ieeexplore.ieee.org/xpl/tocresult.jsp?isnumber=8478029&punumber=83)_

This paper proposes a method for generic object counting in images. From previous experiences, we can tell that objecting counting is essential for industrial applications, but as the paper mentions, emerging applications include fauna monitoring, traffic control, crowd management, etc. Similarly to the previous paper, the authors of this one use **_Data Science_** and **_Machine Learning_** to implement innovative solutions in the field of **_Image Processing_**. It becomes clear that these fields are becoming intertwined as research advances. The most common object counting applications however, have been constrained by the type of object that is being counted. There are car counting systems. There are fruit counting systems. There are pill counting systems. But all these systems work independently, are trained individually and only work for the specific object they were trained to count. I find the proposal in this paper appealing, because a system that can reliably count objects of any type, is more portable to other applications and can improve new and existing systems without investing too much effort on training.


### Underwater Image Enhancement
_Comments on [**"Color Balance and Fusion for Underwater Image Enhancement"**](https://ieeexplore.ieee.org/document/8058463) by Codruta O. Ancuti, Cosmin Ancuti, Christophe De Vleeschouwer, & Philippe Bekaert from ["IEEE Transactions on Image Processing Vol. 27"](https://ieeexplore.ieee.org/xpl/tocresult.jsp?isnumber=8071125&punumber=83)_

I found this paper really interesting because the solution it proposes relates to an issue I (and many of us) have personally faced. Ever since the first waterproof cameras came out, underwater photography has faced many issues. Any camera can take a great picture on land, however light propagates differently underwater and thus distorts the shapes and colors in our images. Without special equipment or expensive hardware, the authors have developed a method to correct these distortions and generate an accurate image using only software. Their solution is pretty straightforward and, unlike the previous two papers, it has nothing to do with machine learning. It implements a pipeline of _only_ image processing that produces amazing results.


### Image Deblurring
_Comments on [**"Graph-Based Blind Image Deblurring From a Single Photograph"**](https://ieeexplore.ieee.org/document/8488519) by Yuanchao Bai, Gene Cheung, Xianming Liu, & Wen Gao from ["IEEE Transactions on Image Processing Vol. 28"](https://ieeexplore.ieee.org/xpl/tocresult.jsp?isnumber=8511005&punumber=83)_

This paper describes the method implemented by the authors to deblur images. I don't pretend to understand everything the paper explains in regard to their algorithm, but I get the base of it. In order to get the original image they iteratively estimate the blur kernel and use it to calculate a skeleton image, until both the blur kernel and the image no longer change. I found this paper very interesting and was impressed by the very realistic results they show. The images resulting from their algorithm clearly show an deblurred version of the original. This could have countless practical applications and I think is a very good example of what _**Image Processing**_ entails: both understanding of how computers perceive images, and of other fields of math and science such as _**Probability**_ and _**Linear Algebra**_.
