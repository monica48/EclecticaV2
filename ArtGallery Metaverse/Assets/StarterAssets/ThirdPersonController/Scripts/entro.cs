using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public class entro : MonoBehaviour
{
    public GameObject text;
    [DllImport("__Internal")]
    private static extern void circle_buy(string nft, string amount, string signature,string url);
    public bool colided;
    // Start is called before the first frame update
    void Start()
    {
        text = GameObject.Find("Canvas");
        text.GetComponent<Canvas>().enabled = false;
    }



    // Update is called once per frame
    void Update()
    {
        buy();
    }

    private void buy()
    {
        if (Input.GetKeyDown("b"))
        {
            if (colided)
            {
                int id = this.transform.GetChild(1).gameObject.GetComponent<ImageLoader>().id;
                int amount = this.transform.GetChild(1).gameObject.GetComponent<ImageLoader>().price;
                string signature = this.transform.GetChild(1).gameObject.GetComponent<ImageLoader>().signature;
                string url = this.transform.GetChild(1).gameObject.GetComponent<ImageLoader>().url;


                circle_buy(id.ToString(), amount.ToString(),signature,url);

                Debug.Log("I am buying ");
            }
        }
    }
    private void OnTriggerEnter(Collider collider)
    {

        if (collider.tag == "Player")
        {
            this.colided = true;
            Debug.Log("hetansh: IN: ");
            text.GetComponent<Canvas>().enabled = true;
        }
    }

    private void OnTriggerExit(Collider collider)
    {
        if (collider.tag == "Player")
        {
            this.colided = false;
            Debug.Log("hetansh: OUT: " );
            text.GetComponent<Canvas>().enabled = false;

        }
    }
}
