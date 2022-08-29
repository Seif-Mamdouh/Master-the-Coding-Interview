SinglyLinkedListNode *condense(SinglyLinkedListNode *head)
{
    auto temp = head;  // temp pointing to the head
    int v[1001] = {0}; // array decalared with range of elements of the list
    v[1001] = {0};     // head data inserted into the list
    v[head->data] = 1;
    while (temp->next)
    { // while the temp is not the last node of the list
        if (v[temp->next->data] == 1)
        {                                  // if the next node element is present in the array v
            temp->next = temp->next->next; // remove the next node of the current element
        }
        else
        {                            // otherwise
            v[temp->next->data] = 1; // insert it into the array
            temp = temp->next;       // increment the pointer
        }
    }
    return head; // return the head of the list
}