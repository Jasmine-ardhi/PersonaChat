import { anshumanPrompt } from "../personas/anshuman.js";
import { kshitijPrompt } from "../personas/kshitij.js";
import { abhimanyuPrompt } from "../personas/abhimanyu.js";

export function getPersonaPrompt(persona) {
  if (persona === "anshuman") return anshumanPrompt;
  if (persona === "kshitij") return kshitijPrompt;
  if (persona === "abhimanyu") return abhimanyuPrompt;
}