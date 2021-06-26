from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")

def home():
    personagens = [
        {
            'nome' : 'Homem de Ferro',
            'imagem' : '\static\img\ironman.png',
            'vida' : 7
        },
        {
            'nome' : 'Capitão America',
            'imagem' : '\static\img\Capitao-America.png',
            'vida' : 5
        },
        {
            'nome' : 'Hulk',
            'imagem' :'\static\img\hulk.png',
            'vida' : 10
        }
    ]
    armas = [
        {
            'nome' : 'Escudo',
            'imagem' : '\static\img\Shield.png',
            'dano' : 20
        },
        {
            'nome' : 'Manopla',
            'imagem' : '\static\img\manopla.png',
            'dano' : 50
        },
        {
            'nome' : 'Soco',
            'imagem' : '\static\img\socoHulk.png',
            'dano' : 10
        }
    ]
    return render_template(
        "index.html",
        personagens=personagens,
        armas=armas
        )

if __name__=="__main__":
    app.run(debug=True)