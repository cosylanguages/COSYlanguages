import re

new_table_rows = '''<tr>
<td>Scientists Tracked Kids for 8 Years — Screen Time Result</td>
<td>English</td>
<td>Speaking Club (Science)</td>
<td><a class="view-btn" href="../apps/premium-events/clubs/kus/sessions/keeping-up-with-science/screen-time-kids-development-intermediate.html" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Explore Session ➔</a></td>
</tr>
<tr>
<td>Multilingual People Have Younger Brains (A2)</td>
<td>English</td>
<td>Speaking Club (Science)</td>
<td><a class="view-btn" href="../apps/premium-events/clubs/kus/sessions/keeping-up-with-science/multilingual-brains-younger-elementary.html" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Explore Session ➔</a></td>
</tr>
<tr>
<td>Multilingual People Have Younger Brains (B1)</td>
<td>English</td>
<td>Speaking Club (Science)</td>
<td><a class="view-btn" href="../apps/premium-events/clubs/kus/sessions/keeping-up-with-science/multilingual-brains-younger-intermediate.html" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Explore Session ➔</a></td>
</tr>
<tr>
<td>Coffee Drinkers: Fat, Muscle, and Hormones</td>
<td>English</td>
<td>Speaking Club (Science)</td>
<td><a class="view-btn" href="../apps/premium-events/clubs/kus/sessions/keeping-up-with-science/coffee-drinkers-muscle-hormones-advanced.html" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Explore Session ➔</a></td>
</tr>
<tr>
<td>Rewriting the Human Family Tree</td>
<td>English</td>
<td>Speaking Club (Science)</td>
<td><a class="view-btn" href="../apps/premium-events/clubs/kus/sessions/keeping-up-with-science/rewriting-human-family-tree-advanced.html" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Explore Session ➔</a></td>
</tr>
<tr>
<td>Kiss and Make Up Day</td>
<td>English</td>
<td>Speaking Club (Celebrate)</td>
<td><a class="view-btn" href="../apps/premium-events/clubs/celebrate/sessions/lets-celebrate/kiss-and-make-up-day-intermediate.html" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Explore Session ➔</a></td>
</tr>
<tr>
<td>Dalai Lama: Happier Minds (A2)</td>
<td>English</td>
<td>Speaking Club (Quotes)</td>
<td><a class="view-btn" href="../apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/dalai-lama-happier-minds-elementary.html" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Explore Session ➔</a></td>
</tr>
<tr>
<td>Dalai Lama: Happier Minds (B1)</td>
<td>English</td>
<td>Speaking Club (Quotes)</td>
<td><a class="view-btn" href="../apps/premium-events/clubs/quotes/sessions/the-greatest-quotes/dalai-lama-happier-minds-intermediate.html" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Explore Session ➔</a></td>
</tr>
<tr>
<td>Chatting with AI vs Chatting with a Human (A2)</td>
<td>English</td>
<td>Speaking Club (Debate)</td>
<td><a class="view-btn" href="../apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-ai-vs-human-elementary.html" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Explore Session ➔</a></td>
</tr>
<tr>
<td>Chatting with AI vs Chatting with a Human (B1)</td>
<td>English</td>
<td>Speaking Club (Debate)</td>
<td><a class="view-btn" href="../apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-ai-vs-human-intermediate.html" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Explore Session ➔</a></td>
</tr>
<tr>
<td>Chatting with AI vs Chatting with a Human (B2)</td>
<td>English</td>
<td>Speaking Club (Debate)</td>
<td><a class="view-btn" href="../apps/premium-events/clubs/debate/sessions/debatable-relatable/chatting-ai-vs-human-upper-intermediate.html" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Explore Session ➔</a></td>
</tr>
<tr>
<td>My Life With & My Life Without Hearing Abilities (B1)</td>
<td>English</td>
<td>Speaking Club (Life)</td>
<td><a class="view-btn" href="../apps/premium-events/clubs/life/sessions/my-life-with-without/hearing-abilities-intermediate.html" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Explore Session ➔</a></td>
</tr>
<tr>
<td>My Life With & My Life Without Hearing Abilities (B2)</td>
<td>English</td>
<td>Speaking Club (Life)</td>
<td><a class="view-btn" href="../apps/premium-events/clubs/life/sessions/my-life-with-without/hearing-abilities-upper-intermediate.html" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Explore Session ➔</a></td>
</tr>
<tr>
<td>Why Some Friends Always Try to Correct You</td>
<td>English</td>
<td>Speaking Club (Mind)</td>
<td><a class="view-btn" href="../apps/premium-events/clubs/mind/sessions/mind-matters/why-friends-correct-your-story-intermediate.html" style="padding: 0.4rem 0.8rem; font-size: 0.8rem;">Explore Session ➔</a></td>
</tr>'''

with open('events/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace <tbody>...</tbody> inside upcoming section
new_content = re.sub(
    r'(<section id="upcoming"[^>]*>.*?<tbody>)(.*?)(</tbody>.*?</section>)',
    r'\1\n' + new_table_rows + r'\n\3',
    content,
    flags=re.DOTALL
)

with open('events/index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated events/index.html 'New Sessions This Week' table!")
