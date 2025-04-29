# scikit-learn on iExec

[Scikit-learn](https://scikit-learn.org/) is an open-source Python library that provides simple and efficient tools for data mining and machine learning, built on top of NumPy, SciPy, and matplotlib. It offers a wide range of algorithms for classification, regression, clustering, dimensionality reduction, and model selection.

## Compatibility

The table gives the scikit-learn versions that have been tested on the iExec Platform, on the
SGX-based workerpools and on the experimental TDX workerpool.

|                | **v. 1.6.1**   | **v. 0.19**     |
| -------------- | -------------- | --------------- |
| **Scone-SGX**  | ❌ Unsupported | ❌ Unsupported |
| **TDX**        | ✅ Supported   |                |


## Instructions

When building a Docker image with scikit-learn, some low-level optimisations must be disabled or
they can lead to errors when the container runs on a slightly different architecture.


```dockerfile

RUN pip install ...

```


## Troubleshooting


