import os
from bs4 import BeautifulSoup

REPHRASINGS = {
    "ai-and-the-brain.html": {
        "Brain-AI chips should be mandatory for high-risk jobs like surgery or aviation. (How does hypothesis affect this statement?)":
            "In the future, brain-AI chips will become mandatory for high-risk jobs like surgery or aviation. (How will this hypothesis affect our careers?)",
        "Schools should ban AI-generated assignments to protect human brain development. (How does cognitive affect this statement?)":
            "In the future, schools will be forced to ban all AI-generated assignments to protect human cognitive development.",
        "Governments should tax robot labor to support human workers replaced by automation. (How does dataset affect this statement?)":
            "By 2050, governments will tax robot labor to support human workers replaced by automation. (How will dataset training affect this system?)",
        "The first AI to pass a consciousness test should be granted the right to vote. (How does Turing test affect this statement?)":
            "The first AI to pass a future consciousness test will eventually be granted the right to vote. (How will the Turing test affect this choice?)"
    },
    "ai-reality-delusion.html": {
        "People who spend too much time talking to AI may slowly lose social skills in real life. (How does Distorted affect this statement?)":
            "In the future, people who spend too much time talking to AI will slowly lose their real-world social skills."
    },
    "animal-cooperation-language.html": {
        "Some animal species possess a concept of culture and history that they pass down through speech.":
            "In the future, scientists will prove that some animal species possess a concept of culture and history passed down through speech.",
        "We should use animal cooperative techniques to improve human disaster response systems.":
            "Future human disaster response systems will rely on animal cooperative and communication techniques.",
        "Animal languages are actually more honest than human language because they cannot lie.":
            "As we decode them, we will find that animal languages are more honest than human ones because they cannot lie."
    },
    "ape-laughter-speech-origin-intermediate.html": {
        "We should use genetic modification to make chimpanzees capable of human-like speech.":
            "In the future, we will use genetic modification to make chimpanzees capable of human-like speech.",
        "High-level cognitive tasks should be taught to wild primates to accelerate their evolution.":
            "Scientists will eventually teach high-level cognitive tasks to wild primates to accelerate their evolution."
    },
    "brain-improving-in-90s.html": {
        "Governments should provide free lifetime education to encourage active aging.":
            "By 2040, governments will provide free lifetime education to encourage active aging and brain health.",
        "A person's attitude towards aging is more important than their genes in determining brain health.":
            "In the future, a person's attitude towards aging will be recognized as more important than their genes in determining brain health.",
        "We should have mandatory brain assessments for drivers over the age of 75.":
            "In the future, we will have mandatory brain assessments for drivers over the age of 75.",
        "Learning a second language is the single most effective way to prevent dementia.":
            "Future doctors will prescribe learning a second language as the single most effective way to prevent dementia."
    },
    "climate-scientist-warming-report.html": {
        "Scientific reports funded by corporations should be completely banned from public policy decisions.":
            "In the future, scientific reports funded by corporations will be completely banned from public policy decisions.",
        "We should prioritize space exploration and colonizing Mars over fixing Earth's climate issues.":
            "In the future, we will prioritize space exploration and colonizing Mars over fixing Earth's climate issues."
    },
    "football-beats-shamrock.html": {
        "Could a cognitive processor chip double our reading speed within 20 years?":
            "Within 20 years, a cognitive processor chip will double our reading speed."
    },
    "grandmother-evolutionary-mystery.html": {
        "Extending human longevity past 120 years using biotechnology is a dangerous biological experiment.":
            "Extending human longevity past 120 years using biotechnology will become a dangerous biological experiment in the future.",
        "The Grandmother Hypothesis is a romantic idea that lacks rigorous scientific proof.":
            "Future genetic studies will prove that the Grandmother Hypothesis is just a romantic idea lacking scientific proof.",
        "Parents who refuse to let grandparents help raise their offspring are making a serious educational mistake.":
            "In the future, parents who refuse to let grandparents help raise their offspring will be seen as making a serious mistake.",
        "Our current economic systems ignore critical evolutionary needs of the human family structure.":
            "Future economic collapses will show that our current systems ignore critical evolutionary needs of the family structure.",
        "The pressure to wean babies quickly in modern corporate societies harms early childhood development.":
            "In the future, the pressure to wean babies quickly in modern corporate societies will severely harm early childhood development.",
        "Humans have lost our basic foraging instincts, making us completely vulnerable to supply chain collapses.":
            "By 2050, humans will have completely lost their foraging instincts, making them vulnerable to supply chain collapses."
    },
    "hidden-regenerative-powers.html": {
        "We should prohibit genetic modification aimed at extending the human lifespan beyond 100.":
            "In the future, we will prohibit genetic modification aimed at extending the human lifespan beyond 100.",
        "Growing synthetic organs in a lab is ethical if it saves human lives.":
            "In the future, growing synthetic organs in a lab will be seen as completely ethical because it saves lives.",
        "Human cloning for the purpose of organ harvesting should be banned worldwide.":
            "In the future, human cloning for the purpose of organ harvesting will be banned worldwide.",
        "Nature intentionally limited human regeneration to prevent overpopulation.":
            "We will eventually discover that nature intentionally limited human regeneration to prevent overpopulation."
    },
    "impersonation-accounts.html": {
        "Digital identity should be a basic human right protected by international law.":
            "In the future, digital identity will become a basic human right protected by international law.",
        "An authentic human interaction is becoming more valuable than any digital service.":
            "An authentic human interaction will eventually become much more valuable than any digital service in the future.",
        "The biggest vulnerability in any security system is always the human element.":
            "In the future, the biggest vulnerability in any security system will continue to be the human element.",
        "We should move to a \"zero-trust\" world where every credential must be verified every time.":
            "We will eventually move to a \"zero-trust\" world where every digital credential must be verified every time.",
        "There is no such thing as a valid pretext for asking for someone else's password.":
            "In the future, there will be no valid pretext for asking for someone else's password as identity verification will be biometric.",
        "Increased surveillance is a price we must pay for a safe and secure internet.":
            "In the future, increased surveillance will be a price we must pay for a safe and secure internet."
    },
    "living-most-creative-time.html": {
        "Content abundance has permanently reduced the human attention span to under ten seconds.":
            "By 2040, content abundance will have permanently reduced the human attention span to under five seconds.",
        "We should restrict content recommendation algorithms to prevent cultural polarization.":
            "Governments will eventually restrict content recommendation algorithms to prevent further cultural polarization.",
        "Direct audience monetization is the only ethical way for artists to survive in the 21st century.":
            "Direct audience monetization will become the only ethical way for artists to survive in the future.",
        "The current saturation of the internet makes it impossible for truly unique voices to be discovered.":
            "In the future, the saturation of the internet will make it impossible for truly unique voices to be discovered without AI help.",
        "A uniform, globalized internet aesthetic is slowly destroying local ethnic traditions.":
            "In 50 years, a uniform, globalized internet aesthetic will have completely destroyed local ethnic traditions.",
        "Extreme accessibility to tools has made people lazy and diminished the quality of art.":
            "In the future, extreme accessibility to creative tools will make people lazy and diminish the overall quality of art.",
        "Building a business around a small niche is far more profitable than trying to appeal to the masses.":
            "Future business models will prove that building a business around a small niche is far more profitable than trying to appeal to the masses.",
        "AI-generated assets can never replicate the soul and authentic craftsmanship of a human master.":
            "Even in 100 years, AI-generated assets will never be able to replicate the authentic craftsmanship of a human master."
    },
    "ozempic-obesity-revolution.html": {
        "We should add appetite suppressants to municipal tap water to improve public health.":
            "Future governments will add appetite suppressants to municipal tap water to improve public health.",
        "Using biotechnology to change our weight is unethical and violates natural limits.":
            "In the future, using biotechnology to change our weight will be seen by many as unethical and a violation of natural limits."
    },
    "right-handedness.html": {
        "The human brain is already halfway through a massive evolutionary shift caused by digital multitasking. (Consider the role of Reinforce here.)":
            "The human brain will undergo a massive evolutionary shift in the future caused by constant digital multitasking. (How will this reinforce asymmetry?)"
    },
    "sensory-system-pain-disease.html": {
        "Mental stress is the primary cause of chronic physical pain in modern populations.":
            "In the future, mental stress will be officially recognized as the primary cause of chronic physical pain in modern populations."
    },
    "spider-creatures-origins-of-fatherhood.html": {
        "We can learn valuable lessons about shared community protection from studying ancient arthropods.":
            "In the future, we will learn valuable lessons about shared community protection by studying ancient arthropods."
    },
    "where-you-live-shapes-dementia-risk-intermediate.html": {
        "We can eliminate seventy percent of age-related illnesses by returning to pre-industrial farming habits.":
            "In the future, we will eliminate seventy percent of age-related illnesses by returning to pre-industrial farming habits."
    },
    "your-fingers-hold-secret-brain-evolution.html": {
        "We can completely prevent age-related neurological decline by playing manual dexterity games daily.":
            "In the future, we will completely prevent age-related neurological decline by playing manual dexterity games daily."
    }
}

def apply_rephrasings():
    science_dir = 'events/sessions/keeping-up-with-science'
    for filename, mapping in REPHRASINGS.items():
        filepath = os.path.join(science_dir, filename)
        if not os.path.exists(filepath):
            continue

        with open(filepath, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')

        r2_block = soup.find('div', id='s-r2') or soup.find('div', class_='round-2')
        if r2_block:
            r2_items = r2_block.find_all('div', class_='round-item')
            for item in r2_items:
                main_div = item.find('div', class_='round-item-main')
                if main_div:
                    main_text = main_div.get_text().strip()
                    # Look up rephrasing
                    if main_text in mapping:
                        # Update text content in place
                        main_div.string = mapping[main_text]
                        print(f"Rephrased in {filename}: '{main_text}' -> '{mapping[main_text]}'")
                    else:
                        # Try loose substring matching
                        for old, new in mapping.items():
                            if old[:30] in main_text:
                                main_div.string = new
                                print(f"Rephrased (loose) in {filename}: '{main_text}' -> '{new}'")
                                break

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(str(soup))

if __name__ == '__main__':
    apply_rephrasings()
