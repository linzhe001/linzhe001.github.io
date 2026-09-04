---
layout: page
title: RefineRank
description: Surgical spatio-temporal grounding that couples a frozen medical vision-language model with an open-set detector through a compact box-refinement and ranking module.
img: /assets/img/publication_preview/refinerank.png
importance: 1
github: https://github.com/linzhe001/RefineRank
---

**Surgical Spatio-Temporal Grounding · Presented at ECCV 2026 MedVidU Workshop (non-archival)**

Linzhe Jiang, Jiayuan Huang, Changhao Zhang, Chunyang Jiang, Zhehua Mao, Mobarak I. Hoque

[arXiv](https://arxiv.org/abs/2608.23928) · [PDF](https://arxiv.org/pdf/2608.23928) · [Code](https://github.com/linzhe001/RefineRank)

## Overview

Surgical spatio-temporal grounding (STG) asks a model to localize, at each video time specified by a procedural question, the object the question refers to. Medical vision-language models (MedVLMs) capture the question context but localize coarsely; open-set detectors produce localized candidate boxes whose confidence does not reflect which box answers the question.

RefineRank closes this gap at the candidate-box level. A compact, trainable module — RefineNet — combines the language and regional features of a **frozen** MedVLM with the proposals of a **frozen** open-set detector. It predicts a bounded coordinate correction and a quality score for every candidate box, and a fixed, parameter-free decoding rule returns the original or refined box with the highest score. No separate selector is needed.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="/assets/img/projects/refinerank/pipeline.png" class="img-fluid rounded z-depth-1" alt="RefineRank pipeline" %}
  </div>
</div>
<div class="caption">
  The RefineRank pipeline: a frozen MedVLM supplies the detector query, sampled-frame visual grids, and per-box regional features; a frozen open-set detector proposes candidate boxes; RefineNet predicts coordinate corrections and quality scores; a fixed argmax decoding rule returns the final answer.
</div>

## Highlights

- Records **0.421 STG mIoU**, the highest displayed STG score on the MedVidBench Official Rankings (Verified), with a global multi-metric rank of 11.
- On video-separated training and evaluation videos, ranking the joint pool of original and refined candidates by RefineNet scores improves STG mIoU from **0.2719 to 0.4534**.
- Coordinate correction raises the candidate oracle upper bound from **0.6772 to 0.7302**, while separately trained selectors over the same pool reach at most **0.4176**.
- Both backbones remain frozen; only a small box-level module is trained, and it implicitly learns to rank as it learns to refine.

## Results

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="/assets/img/projects/refinerank/qualitative.png" class="img-fluid rounded z-depth-1" alt="RefineRank qualitative examples" %}
  </div>
</div>
<div class="caption">
  Representative STG examples: columns compare direct MedVLM, MedVLM + open-set detector, and RefineRank predictions against the target box.
</div>

## Citation

```bibtex
@article{jiang2026refinerank,
  title     = {RefineRank: Joint Box Refinement and Ranking for Surgical Spatio-Temporal Grounding},
  author    = {Jiang, Linzhe and Huang, Jiayuan and Zhang, Changhao and Jiang, Chunyang and Mao, Zhehua and Hoque, Mobarak I.},
  journal   = {arXiv preprint arXiv:2608.23928},
  year      = {2026}
}
```
