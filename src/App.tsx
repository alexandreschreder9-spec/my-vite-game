import { useState } from "react";

const QUESTIONS = {
  1: [
    { q: "Which sentence is a SIMPLE sentence?", options: ["I went to the store, and I bought milk.", "Although it was raining, we played outside.", "She sings.", "Because I was tired, I slept."], answer: 2, category: "Simple", explanation: "A simple sentence has just one independent clause — no joining words, no dependent clauses." },
    { q: "Which sentence is COMPOUND?", options: ["She studied hard.", "I wanted pizza, but we ordered tacos.", "When the bell rang, students left.", "We went hiking."], answer: 1, category: "Compound", explanation: "A compound sentence joins two independent clauses with a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so)." },
    { q: "Which sentence is COMPLEX?", options: ["The sun set and the stars appeared.", "Run!", "Although she was nervous, Maya gave a great speech.", "He laughed and she smiled."], answer: 2, category: "Complex", explanation: "A complex sentence has one independent clause plus one dependent clause introduced by a subordinating conjunction like 'although.'" },
    { q: "A simple sentence has how many independent clauses?", options: ["Zero", "One", "Two", "Three"], answer: 1, category: "Simple", explanation: "A simple sentence has exactly one independent clause — one subject and one predicate." },
    { q: "Which word is a coordinating conjunction (FANBOYS)?", options: ["because", "although", "but", "when"], answer: 2, category: "Compound", explanation: "FANBOYS stands for: For, And, Nor, But, Or, Yet, So — these join independent clauses in compound sentences." },
    { q: "Which sentence is COMPLEX?", options: ["Dogs bark.", "I ran, and she walked.", "Because it rained, the game was cancelled.", "Stop!"], answer: 2, category: "Complex", explanation: "'Because it rained' is a dependent clause; 'the game was cancelled' is the independent clause." },
    { q: "Which sentence is SIMPLE?", options: ["She danced, and he watched.", "If you hurry, we can make it.", "The tall, energetic puppy chased the ball.", "We ate dinner, but we skipped dessert."], answer: 2, category: "Simple", explanation: "'The tall, energetic puppy chased the ball' has one subject and one verb — it's a simple sentence, even with adjectives." },
    { q: "Which sentence is COMPOUND?", options: ["After lunch, we played outside.", "The game ended.", "Luis scored a goal, and the crowd cheered.", "Whenever I'm bored, I read."], answer: 2, category: "Compound", explanation: "'Luis scored a goal' and 'the crowd cheered' are two independent clauses joined by 'and.'" },
    { q: "Which conjunction makes a sentence COMPLEX, not compound?", options: ["and", "but", "or", "because"], answer: 3, category: "Complex", explanation: "'Because' is a subordinating conjunction — it creates a dependent clause, making the sentence complex, not compound." },
    { q: "Which sentence is SIMPLE?", options: ["I tripped, yet I caught myself.", "She sings in the choir.", "When he left, we waved goodbye.", "They ran, and we followed."], answer: 1, category: "Simple", explanation: "'She sings in the choir' has one independent clause with no conjunctions joining another clause." },
    { q: "Which sentence is COMPOUND?", options: ["The old, rusty car sputtered.", "We were late, so we ran.", "Since it was cold, she wore a coat.", "He smiled."], answer: 1, category: "Compound", explanation: "'We were late' and 'we ran' are two independent clauses joined by 'so,' a coordinating conjunction." },
    { q: "Which sentence is COMPLEX?", options: ["She laughed and cried.", "We left early.", "I stayed home because I was sick.", "He ran, but she walked."], answer: 2, category: "Complex", explanation: "'because I was sick' is a dependent adverb clause; 'I stayed home' is the independent clause." },
    { q: "Which sentence is SIMPLE?", options: ["Cooper and Jet ran to the park, and they played fetch.", "Although it was muddy, Cooper and Jet chased the ball.", "Cooper and Jet raced across the field.", "Cooper laughed, but Jet barked."], answer: 2, category: "Simple", explanation: "'Cooper and Jet raced across the field' is a simple sentence — it has a compound subject but just one independent clause." },
  ],
  2: [
    { q: "Which sentence is COMPOUND-COMPLEX?", options: ["Stop!", "I like cats.", "After school ended, Jaylen ran home, and his sister followed.", "We went hiking."], answer: 2, category: "Compound-Complex", explanation: "A compound-complex sentence has two independent clauses ('Jaylen ran home' + 'his sister followed') and one dependent clause ('After school ended')." },
    { q: "Identify the ADJECTIVE CLAUSE: 'The book that I borrowed is overdue.'", options: ["The book", "that I borrowed", "is overdue", "The book is overdue"], answer: 1, category: "Adjective Clause", explanation: "An adjective clause modifies a noun — 'that I borrowed' describes 'the book.'" },
    { q: "Identify the ADVERB CLAUSE: 'We stayed inside because it was raining.'", options: ["We stayed inside", "it was raining", "because it was raining", "stayed inside"], answer: 2, category: "Adverb Clause", explanation: "An adverb clause modifies a verb — 'because it was raining' tells WHY they stayed inside." },
    { q: "Which word signals an ADJECTIVE CLAUSE?", options: ["because", "although", "who", "therefore"], answer: 2, category: "Adjective Clause", explanation: "Relative pronouns like 'who,' 'which,' and 'that' introduce adjective clauses that modify nouns." },
    { q: "Identify the NOUN CLAUSE: 'What she said surprised everyone.'", options: ["surprised everyone", "What she said", "she said", "everyone"], answer: 1, category: "Noun Clause", explanation: "A noun clause acts as a noun — 'What she said' is the subject of the sentence." },
    { q: "'Unless you study, you will fail the test.' — What type of sentence is this?", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: 2, category: "Complex", explanation: "'Unless you study' is a dependent adverb clause; 'you will fail the test' is the independent clause." },
    { q: "Identify the ADJECTIVE CLAUSE: 'The girl who won the spelling bee is in my class.'", options: ["The girl is in my class", "who won the spelling bee", "in my class", "The girl who won"], answer: 1, category: "Adjective Clause", explanation: "'who won the spelling bee' is an adjective clause modifying the noun 'girl.'" },
    { q: "Identify the ADVERB CLAUSE: 'Before the storm hit, we closed all the windows.'", options: ["we closed all the windows", "Before the storm hit", "all the windows", "closed all"], answer: 1, category: "Adverb Clause", explanation: "'Before the storm hit' is an adverb clause telling WHEN they closed the windows." },
    { q: "Which sentence contains a NOUN CLAUSE?", options: ["The dog barked loudly.", "I believe that honesty matters.", "She runs every morning.", "He is tall and fast."], answer: 1, category: "Noun Clause", explanation: "'that honesty matters' is a noun clause acting as the direct object of 'believe.'" },
    { q: "What type of sentence is: 'She sings, and he plays guitar, while the crowd listens.'?", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: 3, category: "Compound-Complex", explanation: "Two independent clauses ('She sings' + 'he plays guitar') and one dependent clause ('while the crowd listens') = compound-complex." },
    { q: "Identify the ADJECTIVE CLAUSE: 'The pizza that we ordered arrived cold.'", options: ["The pizza arrived cold", "that we ordered", "arrived cold", "we ordered"], answer: 1, category: "Adjective Clause", explanation: "'that we ordered' is an adjective clause modifying the noun 'pizza.'" },
    { q: "Identify the ADVERB CLAUSE: 'She practiced daily so that she could improve.'", options: ["She practiced daily", "so that she could improve", "she could improve", "practiced daily"], answer: 1, category: "Adverb Clause", explanation: "'so that she could improve' is an adverb clause telling WHY she practiced daily." },
  ],
  3: [
    { q: "'She smiled when she heard the news, and he clapped.' — Sentence type?", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: 3, category: "Compound-Complex", explanation: "Two independent clauses ('She smiled' + 'he clapped') plus one dependent clause ('when she heard the news') = compound-complex." },
    { q: "Which sentence has a NOUN CLAUSE used as a direct object?", options: ["She runs fast.", "I know that you are right.", "The dog, which is fluffy, sleeps.", "He laughed, but she cried."], answer: 1, category: "Noun Clause", explanation: "'that you are right' is a noun clause acting as the direct object of the verb 'know.'" },
    { q: "Choose the ADVERB CLAUSE: 'Wherever you go, I will follow.'", options: ["I will follow", "Wherever you go", "you go", "will follow"], answer: 1, category: "Adverb Clause", explanation: "'Wherever you go' is an adverb clause modifying the verb 'will follow' — it tells WHERE." },
    { q: "'Although Marcus was tired, he finished his essay, and his teacher praised him.' — Sentence type?", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: 3, category: "Compound-Complex", explanation: "Dependent clause: 'Although Marcus was tired.' Two independent clauses: 'he finished his essay' + 'his teacher praised him.' That's compound-complex." },
    { q: "In 'The student who studies every night earns top grades,' what does the adjective clause modify?", options: ["night", "grades", "student", "earns"], answer: 2, category: "Adjective Clause", explanation: "'who studies every night' is an adjective clause modifying the noun 'student.'" },
    { q: "Which sentence uses a noun clause as the SUBJECT?", options: ["I believe that she will win.", "That she won surprised us all.", "She won the award.", "He said something quietly."], answer: 1, category: "Noun Clause", explanation: "'That she won' is a noun clause acting as the subject of the verb 'surprised.'" },
    { q: "In 'Whoever finishes first will get extra credit,' the noun clause acts as the ___.", options: ["direct object", "subject", "predicate nominative", "adverb"], answer: 1, category: "Noun Clause", explanation: "'Whoever finishes first' is a noun clause acting as the subject of 'will get.'" },
    { q: "'The coach whose team won the championship retired last year.' — What does the adjective clause modify?", options: ["championship", "year", "coach", "team"], answer: 2, category: "Adjective Clause", explanation: "'whose team won the championship' is an adjective clause modifying 'coach.'" },
    { q: "'Although Emily and Manny studied together, Emily aced the test, and Manny said he needed more practice.' — How many independent clauses are there?", options: ["One", "Two", "Three", "Four"], answer: 1, category: "Compound-Complex", explanation: "Two independent clauses: 'Emily aced the test' and 'Manny said he needed more practice.' 'Although Emily and Manny studied together' is the dependent clause." },
    { q: "'Because she trained for months, Ava won the race, and her school celebrated.' — Sentence type?", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: 3, category: "Compound-Complex", explanation: "Dependent clause: 'Because she trained for months.' Two independent clauses: 'Ava won the race' + 'her school celebrated.' Compound-complex." },
    { q: "Which sentence uses an adverb clause to show CONDITION?", options: ["She left after the show ended.", "He smiled because he was happy.", "If it snows, school will be cancelled.", "We played where the field was dry."], answer: 2, category: "Adverb Clause", explanation: "'If it snows' is an adverb clause of condition — it tells under what circumstances school will be cancelled." },
    { q: "Identify the noun clause: 'The teacher announced that the test was postponed.'", options: ["The teacher announced", "that the test was postponed", "the test was postponed", "was postponed"], answer: 1, category: "Noun Clause", explanation: "'that the test was postponed' is a noun clause acting as the direct object of 'announced.'" },
    { q: "'When the lights dimmed, the audience quieted, and the play began.' — How many clauses total?", options: ["Two", "Three", "Four", "One"], answer: 1, category: "Compound-Complex", explanation: "Three clauses: 'When the lights dimmed' (dependent) + 'the audience quieted' + 'the play began' (both independent) = compound-complex with 3 clauses." },
    { q: "What type of sentence is: 'Ella Grace and Redding stayed late because they wanted to finish the project, and their teacher was impressed.'?", options: ["Simple", "Compound", "Complex", "Compound-Complex"], answer: 3, category: "Compound-Complex", explanation: "Two independent clauses ('Ella Grace and Redding stayed late' + 'their teacher was impressed') and one dependent clause ('because they wanted to finish the project') = compound-complex." },
  ],
};

const ENEMIES = [
  { name: "Comma Bandit",  hp: 3, emoji: "🦹", level: "Stage 1", color: "#1D9E75", bg: "#E1F5EE", border: "#1D9E75" },
  { name: "Run-On Robot",  hp: 4, emoji: "🤖", level: "Stage 2", color: "#185FA5", bg: "#E6F1FB", border: "#185FA5" },
  { name: "Fragment Fiend",hp: 5, emoji: "👿", level: "Final Boss", color: "#993C1D", bg: "#FAECE7", border: "#993C1D" },
];

const PLAYER_MAX_HP = 5;

function HPBar({ current, max, color }) {
  return (
    <div style={{ display: "flex", gap: 5 }}>
      {Array.from({ length: max }).map((_, i) => (
        <div key={i} style={{ width: 20, height: 20, borderRadius: 4, background: i < current ? color : "var(--color-background-secondary)", border: "1.5px solid var(--color-border-secondary)", transition: "background 0.3s" }} />
      ))}
    </div>
  );
}

function getQuestion(stage, usedIndices) {
  const pool = QUESTIONS[stage];
  const available = pool.map((_, i) => i).filter(i => !usedIndices.includes(i));
  const pickFrom = available.length > 0 ? available : pool.map((_, i) => i);
  const idx = pickFrom[Math.floor(Math.random() * pickFrom.length)];
  return { q: pool[idx], idx };
}

export default function GrammarQuest() {
  const [screen, setScreen] = useState("title");
  const [stage, setStage] = useState(1);
  const [playerHP, setPlayerHP] = useState(PLAYER_MAX_HP);
  const [enemyHP, setEnemyHP] = useState(ENEMIES[0].hp);
  const [usedQs, setUsedQs] = useState([]);
  const [currentQ, setCurrentQ] = useState(null);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [shake, setShake] = useState(false);
  const [flash, setFlash] = useState(null);
  const [pendingScreen, setPendingScreen] = useState(null);

  const enemy = ENEMIES[stage - 1];

  function startGame() {
    const { q, idx } = getQuestion(1, []);
    setStage(1);
    setPlayerHP(PLAYER_MAX_HP);
    setEnemyHP(ENEMIES[0].hp);
    setUsedQs([idx]);
    setCurrentQ(q);
    setSelected(null);
    setResult(null);
    setScore(0);
    setTotal(0);
    setFlash(null);
    setPendingScreen(null);
    setScreen("battle");
  }

  function nextQuestion(currentUsed, currentStage) {
    const { q, idx } = getQuestion(currentStage, currentUsed);
    setUsedQs([...currentUsed, idx]);
    setCurrentQ(q);
    setSelected(null);
    setResult(null);
  }

  function handleAnswer(i) {
    if (selected !== null) return;
    setSelected(i);
    setTotal(t => t + 1);
    const correct = i === currentQ.answer;
    setResult(correct ? "correct" : "wrong");

    if (correct) {
      setScore(s => s + 1);
      setFlash("green");
      setTimeout(() => setFlash(null), 400);
      const newEnemyHP = enemyHP - 1;
      setEnemyHP(newEnemyHP);
      if (newEnemyHP <= 0) {
        if (stage >= ENEMIES.length) {
          setPendingScreen("win");
        } else {
          setPendingScreen("stageclear");
        }
      }
    } else {
      setFlash("red");
      setShake(true);
      setTimeout(() => { setFlash(null); setShake(false); }, 500);
      const newPlayerHP = playerHP - 1;
      setPlayerHP(newPlayerHP);
      if (newPlayerHP <= 0) {
        setPendingScreen("lose");
      }
    }
  }

  function handleNext() {
    if (pendingScreen) {
      setScreen(pendingScreen);
      setPendingScreen(null);
      return;
    }
    nextQuestion(usedQs, stage);
  }

  function handleContinue() {
    const nextStage = stage + 1;
    const nextEnemy = ENEMIES[nextStage - 1];
    const { q, idx } = getQuestion(nextStage, []);
    setStage(nextStage);
    setEnemyHP(nextEnemy.hp);
    setUsedQs([idx]);
    setCurrentQ(q);
    setSelected(null);
    setResult(null);
    setFlash(null);
    setScreen("battle");
  }

  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  if (screen === "title") return (
    <div style={{ textAlign: "center", padding: "2.5rem 1rem" }}>
      <div style={{ fontSize: 56, marginBottom: 8 }}>⚔️</div>
      <h1 style={{ fontSize: 24, fontWeight: 500, margin: "0 0 4px", color: "var(--color-text-primary)" }}>Grammar Quest</h1>
      <p style={{ fontSize: 14, color: "var(--color-text-secondary)", marginBottom: 28 }}>Sentence Showdown — 7th Grade Edition</p>
      <div style={{ background: "var(--color-background-secondary)", borderRadius: 12, padding: "1rem 1.5rem", maxWidth: 360, margin: "0 auto 24px", textAlign: "left", fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
        <p style={{ margin: "0 0 6px", color: "var(--color-text-primary)", fontWeight: 500 }}>How to play</p>
        <p style={{ margin: 0 }}>Answer grammar questions to defeat 3 enemies. Correct answer = damage the enemy. Wrong answer = you take damage. Questions get harder each stage!</p>
      </div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 24, fontSize: 12, color: "var(--color-text-secondary)" }}>
        {["Simple", "Compound", "Complex", "Compound-Complex", "Adj. Clause", "Noun Clause", "Adv. Clause"].map(t => (
          <span key={t} style={{ background: "var(--color-background-secondary)", border: "0.5px solid var(--color-border-tertiary)", borderRadius: 20, padding: "3px 10px" }}>{t}</span>
        ))}
      </div>
      <button onClick={startGame} style={{ fontSize: 15, padding: "10px 32px", borderRadius: 8, cursor: "pointer", background: "#1D9E75", color: "#fff", border: "none", fontWeight: 500 }}>Start Quest</button>
    </div>
  );

  if (screen === "stageclear") return (
    <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
      <div style={{ fontSize: 52 }}>✅</div>
      <h2 style={{ fontSize: 20, fontWeight: 500, margin: "12px 0 6px", color: "var(--color-text-primary)" }}>Stage Clear!</h2>
      <p style={{ color: "var(--color-text-secondary)", marginBottom: 24 }}>
        You defeated {ENEMIES[stage - 1].name}! Next up: {ENEMIES[stage].name} {ENEMIES[stage].emoji}
      </p>
      <button onClick={handleContinue} style={{ fontSize: 14, padding: "9px 28px", borderRadius: 8, cursor: "pointer", background: "#378ADD", color: "#fff", border: "none", fontWeight: 500 }}>Continue →</button>
    </div>
  );

  if (screen === "win") return (
    <div style={{ textAlign: "center", padding: "2.5rem 1rem" }}>
      <div style={{ fontSize: 52 }}>🏆</div>
      <h2 style={{ fontSize: 22, fontWeight: 500, margin: "12px 0 4px", color: "var(--color-text-primary)" }}>You won!</h2>
      <p style={{ color: "var(--color-text-secondary)", marginBottom: 20 }}>All three grammar villains defeated!</p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
        {[["Correct", score, "#1D9E75"], ["Wrong", total - score, "#D85A30"], ["Accuracy", `${pct}%`, "#378ADD"]].map(([label, val, color]) => (
          <div key={label} style={{ background: "var(--color-background-secondary)", borderRadius: 10, padding: "12px 20px", minWidth: 80 }}>
            <div style={{ fontSize: 22, fontWeight: 500, color }}>{val}</div>
            <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{label}</div>
          </div>
        ))}
      </div>
      <button onClick={() => setScreen("title")} style={{ fontSize: 14, padding: "9px 28px", borderRadius: 8, cursor: "pointer", background: "#1D9E75", color: "#fff", border: "none", fontWeight: 500 }}>Play Again</button>
    </div>
  );

  if (screen === "lose") return (
    <div style={{ textAlign: "center", padding: "2.5rem 1rem" }}>
      <div style={{ fontSize: 52 }}>💀</div>
      <h2 style={{ fontSize: 22, fontWeight: 500, margin: "12px 0 4px", color: "var(--color-text-primary)" }}>Defeated!</h2>
      <p style={{ color: "var(--color-text-secondary)", marginBottom: 20 }}>The grammar villains won this time. Study up and try again!</p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 24 }}>
        {[["Correct", score, "#1D9E75"], ["Accuracy", `${pct}%`, "#378ADD"]].map(([label, val, color]) => (
          <div key={label} style={{ background: "var(--color-background-secondary)", borderRadius: 10, padding: "12px 20px", minWidth: 80 }}>
            <div style={{ fontSize: 22, fontWeight: 500, color }}>{val}</div>
            <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{label}</div>
          </div>
        ))}
      </div>
      <button onClick={() => setScreen("title")} style={{ fontSize: 14, padding: "9px 28px", borderRadius: 8, cursor: "pointer", background: "#D85A30", color: "#fff", border: "none", fontWeight: 500 }}>Try Again</button>
    </div>
  );

  if (!currentQ) return <div style={{ padding: "2rem", textAlign: "center", color: "var(--color-text-secondary)" }}>Loading...</div>;

  const isOver = result && (enemyHP <= 0 || playerHP - (result === "wrong" ? 1 : 0) <= 0);

  return (
    <div style={{ padding: "1rem", maxWidth: 560, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, gap: 12 }}>
        <div style={{ background: "var(--color-background-secondary)", borderRadius: 10, padding: "10px 14px", flex: 1, border: "0.5px solid var(--color-border-tertiary)" }}>
          <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 4 }}>You — HP</div>
          <HPBar current={playerHP} max={PLAYER_MAX_HP} color="#1D9E75" />
        </div>
        <div style={{ fontSize: 28, alignSelf: "center", animation: shake ? "shake 0.4s" : "none" }}>{enemy.emoji}</div>
        <div style={{ background: enemy.bg, borderRadius: 10, padding: "10px 14px", flex: 1, border: `0.5px solid ${enemy.border}`, textAlign: "right" }}>
          <div style={{ fontSize: 12, color: enemy.color, marginBottom: 4 }}>{enemy.name} — HP</div>
          <div style={{ display: "flex", gap: 5, justifyContent: "flex-end" }}>
            <HPBar current={enemyHP} max={enemy.hp} color={enemy.color} />
          </div>
        </div>
      </div>

      <div style={{
        background: flash === "green" ? "#E1F5EE" : flash === "red" ? "#FAECE7" : "var(--color-background-secondary)",
        border: `0.5px solid ${flash === "green" ? "#1D9E75" : flash === "red" ? "#D85A30" : "var(--color-border-tertiary)"}`,
        borderRadius: 12, padding: "14px 16px", marginBottom: 14, transition: "background 0.3s, border 0.3s", minHeight: 80
      }}>
        <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginBottom: 6, fontWeight: 500, textTransform: "uppercase", letterSpacing: 0.5 }}>{enemy.emoji} {enemy.name} attacks with a question!</div>
        <div style={{ fontSize: 15, color: "var(--color-text-primary)", lineHeight: 1.5 }}>{currentQ.q}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
        {currentQ.options.map((opt, i) => {
          let bg = "var(--color-background-primary)";
          let border = "0.5px solid var(--color-border-tertiary)";
          let color = "var(--color-text-primary)";
          if (selected !== null) {
            if (i === currentQ.answer) { bg = "#E1F5EE"; border = "1.5px solid #1D9E75"; color = "#085041"; }
            else if (i === selected && selected !== currentQ.answer) { bg = "#FAECE7"; border = "1.5px solid #D85A30"; color = "#993C1D"; }
          }
          return (
            <button key={i} onClick={() => handleAnswer(i)} disabled={selected !== null}
              style={{ textAlign: "left", background: bg, border, borderRadius: 9, padding: "10px 14px", fontSize: 14, color, cursor: selected !== null ? "default" : "pointer", transition: "all 0.25s", fontFamily: "inherit" }}>
              <span style={{ fontWeight: 500, marginRight: 8, color: selected !== null ? color : "var(--color-text-secondary)" }}>{["A", "B", "C", "D"][i]}.</span>{opt}
            </button>
          );
        })}
      </div>

      {result && (
        <div style={{ background: result === "correct" ? "#E1F5EE" : "#FAECE7", border: `0.5px solid ${result === "correct" ? "#1D9E75" : "#D85A30"}`, borderRadius: 10, padding: "10px 14px", fontSize: 13, color: result === "correct" ? "#085041" : "#993C1D", display: "flex", flexDirection: "column", gap: 10 }}>
          <span><strong>{result === "correct" ? "Correct!" : "Not quite."}</strong> {currentQ.explanation}</span>
          <button onClick={handleNext} style={{ alignSelf: "flex-end", fontSize: 13, padding: "6px 18px", borderRadius: 7, cursor: "pointer", background: result === "correct" ? "#1D9E75" : "#D85A30", color: "#fff", border: "none", fontWeight: 500 }}>
            {pendingScreen ? (pendingScreen === "stageclear" ? "Stage Clear →" : pendingScreen === "win" ? "See Results →" : "See Results →") : "Next →"}
          </button>
        </div>
      )}



      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, fontSize: 12, color: "var(--color-text-tertiary)" }}>
        <span>{enemy.level}: {enemy.name}</span>
        <span>Score: {score}/{total}</span>
      </div>

      <style>{`@keyframes shake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-6px)} 75%{transform:translateX(6px)} }`}</style>
    </div>
  );
}