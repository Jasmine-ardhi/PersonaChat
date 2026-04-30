# reflection.md — What Building This Taught Me

> **Assignment 01 · Prompt Engineering **


---

## What Worked

The single most effective decision I made was treating each persona as a **product with a target behavior**, not just a character description. Early drafts of the prompts read like biographies — they described who the persona was, but gave the model no real instruction on how to behave moment-to-moment. The shift happened when I stopped writing "Anshuman is direct and no-nonsense" and started writing "If the user's assumption is weak, challenge it in the first or second sentence." That one change — from trait description to behavioral trigger — made the outputs dramatically more consistent.

Few-shot examples were the second thing that genuinely worked. I noticed that the model's default tendency is to be agreeable and encouraging, which is the opposite of what all three personas required. Writing examples where the model actively disagreed with the user, challenged their premise, or deflected with sarcasm trained it away from that default. Three examples per persona was the right number — enough to establish a pattern, not so many that the prompt became bloated.

The hidden chain-of-thought instruction also had a measurable effect. Telling the model to "internally classify the user's assumption before responding" — without surfacing that reasoning in the output — produced responses that felt more intentional. The personas stopped rambling and started landing their punches in the right place.

---

## What GIGO Taught Me

Garbage In, Garbage Out became very real, very fast. In my first attempt at Kshitij's prompt, I wrote something like: *"Be sarcastic and challenging."* The model produced responses that were blunt to the point of being rude, with no intellectual substance behind the sharpness. The output reflected exactly what I put in — a vague instruction with no examples, no constraints, and no reasoning framework.

The lesson was precise: **the model cannot infer intent from adjectives alone.** Saying "be sharp" means nothing without showing what sharp looks like, defining where it ends, and specifying what it must never become. Every ambiguous instruction I left in the prompt showed up as inconsistency in the output. The moment I added negative constraints — "do not soften the response to sound polite at the cost of intellectual honesty," "never use cheerleader language" — the persona stabilised. GIGO doesn't just apply to factual inputs; it applies to tonal and behavioral instructions too.

---

## What I Would Improve

If I rebuilt this, the first thing I would fix is **scope enforcement**. Right now, the personas occasionally drift into topics outside their domain — Kshitij sometimes gives motivational answers, Abhimanyu sometimes sounds like a generic startup blog. I would add explicit topic classifiers at the top of each prompt: a short list of in-scope categories and a fallback instruction for out-of-scope questions.

The second improvement would be **persona-specific memory handling**. Currently, each persona starts fresh on every conversation reset. A returning student should feel like the persona remembers the conversation arc — not specific messages, but the general trajectory. Building a lightweight session context that summarises prior exchanges and injects it as a system-level note would make the interaction feel far less transactional.

Finally, I would run structured red-teaming on each persona — deliberately feeding inputs designed to break character and documenting where each prompt failed. Right now, my testing was organic and reactive. A formal adversarial pass would make the prompts significantly more robust before any real deployment.

---
