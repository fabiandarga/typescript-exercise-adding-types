// Aufgabe: Ergänzen Sie TypeScript-Typen für alle Funktionen und finden Sie die Typfehler!

function berechne_durchschnitt(noten) {
    /*Berechnet den Durchschnitt einer Liste von Noten*/
    return noten.reduce((sum, note) => sum + note, 0) / noten.length;
}

function finde_schueler(schueler_dict, name) {
    /*Findet einen Schüler in einem Dictionary und gibt seine Informationen zurück*/
    return schueler_dict[name] || "Nicht gefunden";
}

function formatiere_note(note) {
    /*Formatiert eine Note als String mit einem '+' wenn sie besser als 2.0 ist*/
    if (note < 2.0) {
        return note.toString() + "+";
    }
    return note.toString();
}

function erstelle_bericht(name, alter, noten) {
    /*Erstellt einen Bericht für einen Schüler*/
    return {
        name: name,
        alter: alter,
        noten: noten,
        durchschnitt: berechne_durchschnitt(noten),
    };
}

function aktualisiere_alter(schueler, neues_alter) {
    /*Aktualisiert das Alter eines Schülers*/
    schueler.alter = neues_alter;
    return schueler;
}

function main() {
    // Beispiel-Daten
    const schueler_daten = {
        Max: { alter: 16, noten: [1, 2, 2, 3] },
        Lisa: { alter: "17", noten: [1, 1, 2, 1] }, // Absichtlicher Fehler: Alter als String
        Tom: { alter: 16, noten: [2, 3, "2", 4] }, // Absichtlicher Fehler: Note als String
    };

    try {
        // Berechnungen und Ausgaben
        console.log("Schülerberichte:");

        for (const name in schueler_daten) {
            const daten = schueler_daten[name];
            const bericht = erstelle_bericht(name, daten.alter, daten.noten);

            console.log(`\nBericht für ${name}:`);
            console.log(`Alter: ${bericht.alter}`);
            console.log(`Notendurchschnitt: ${formatiere_note(bericht.durchschnitt)}`);
        }

        // Demonstriere einige Typfehler
        const lisa_info = finde_schueler(schueler_daten, "Lisa");
        if (lisa_info !== "Nicht gefunden") {
            lisa_info.noten.push(2.5); // Könnte fehlschlagen
        }

        const tom_durchschnitt = berechne_durchschnitt(schueler_daten["Tom"].noten); // Wird fehlschlagen

        // Alter aktualisieren
        const max_aktualisiert = aktualisiere_alter(schueler_daten["Max"], "17"); // Absichtlicher Fehler: Alter als String
    } catch (error) {
        console.error(`\nFehler aufgetreten: ${error.message}`);
        console.log("Dieser Fehler könnte durch TypeScript-Typen verhindert werden!");
    }
}

main();
